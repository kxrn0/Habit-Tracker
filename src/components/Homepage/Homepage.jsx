import "./homepage.css";
import Stick from "../Stick/Stick";
import Clock from "../Clock/Clock";
import Toggle from "../Toggle/Toggle";
import Content from "../Content/Content";
import SlideScreen from "../SlideScreen/SlideScreen";
import { is_substring } from "../../utilities/is_substring";
import { useRef, useState } from "react";

export default function Homepage({ habits, update, add_habit }) {
    const storageOrKey = "_storage_or_key";
    const [orFilter, setOrFilter] = useState(() => {
        let filter;

        filter = sessionStorage.getItem(storageOrKey);

        if (!filter) filter = false;
        else filter = JSON.parse(filter);
        sessionStorage.setItem(storageOrKey, JSON.stringify(filter));
        return filter;
    });
    const storageKeyCurrent = "_current_tags_";
    const storageKeyInactive = "_inactive_tags_";
    const [currentTags, setCurrentTags] = useState(() => {
        const currentThing = sessionStorage.getItem(storageKeyCurrent);

        if (!currentThing) return [];

        const tags = JSON.parse(currentThing).filter((tag) =>
            habits.some((habit) => habit.tags.includes(tag))
        );

        sessionStorage.setItem(storageKeyCurrent, JSON.stringify(tags));
        return tags;
    });
    const [inactiveTags, setInactiveTags] = useState(() => {
        const inactive = sessionStorage.getItem(storageKeyInactive);
        let tags;

        tags = [];

        if (inactive)
            tags = JSON.parse(inactive).filter((tag) =>
                habits.some((habit) => habit.tags.includes(tag))
            );

        for (let habit of habits)
            for (let tag of habit.tags)
                if (!tags.includes(tag) && !currentTags.includes(tag))
                    tags.push(tag);

        sessionStorage.setItem(storageKeyInactive, JSON.stringify(tags));
        return tags;
    });
    const [currentShownTags, setCurrentShownTags] = useState([...inactiveTags]);
    const [aside, setAside] = useState(false);
    const sticks = habits
        .map((habit) => {
            const method = orFilter ? "some" : "every";

            if (
                currentTags[method]((tag) => habit.tags.includes(tag)) ||
                !currentTags.length
            )
                return <Stick key={habit.id} habit={habit} update={update} />;
            return null;
        })
        .filter((stick) => stick !== null);
    const [screenOfCreation, setScreenOfCreation] = useState(false);
    const [creationContent, setCreationContent] = useState("");
    const asideInputRef = useRef(null);

    //#region

    function set_logic_filter(state) {
        setOrFilter(state);
        sessionStorage.setItem(storageOrKey, JSON.stringify(state));
    }

    function add_to_current(tag) {
        setCurrentTags((prevTags) => {
            const tags = [...prevTags, tag];

            sessionStorage.setItem(storageKeyCurrent, JSON.stringify(tags));
            return tags;
        });
        setInactiveTags((prevTags) => {
            const tags = prevTags.filter((other) => other !== tag);

            sessionStorage.setItem(storageKeyInactive, JSON.stringify(tags));
            return tags;
        });
        setCurrentShownTags((prevTags) =>
            prevTags.filter((other) => other !== tag)
        );
    }

    function remove_from_current(tag) {
        setCurrentTags((prevTags) => {
            const tags = prevTags.filter((other) => other !== tag);

            sessionStorage.setItem(storageKeyCurrent, JSON.stringify(tags));
            return tags;
        });
        setInactiveTags((prevTags) => {
            const tags = [...prevTags, tag];

            sessionStorage.setItem(setInactiveTags, JSON.stringify(tags));
            return tags;
        });
        setCurrentShownTags(() => {
            asideInputRef.current.value = "";

            return [
                ...get_all_tags().filter((tag) => !currentTags.includes(tag)),
                tag,
            ];
        });
    }

    function get_all_tags() {
        const tags = [];

        for (let habit of habits)
            for (let tag of habit.tags) if (!tags.includes(tag)) tags.push(tag);

        return tags;
    }

    function clear_all_tags() {
        const allTags = get_all_tags();

        sessionStorage.setItem(storageKeyCurrent, "");
        sessionStorage.setItem(storageKeyInactive, JSON.stringify(allTags));

        setCurrentTags([]);
        setInactiveTags(allTags);
        setCurrentShownTags([...allTags]);
    }

    function add_new_habit(habit) {
        close_screen();
        add_habit(habit);
    }

    function set_up_screen() {
        setCreationContent(<Content add_habit={add_new_habit} />);
        setScreenOfCreation(true);
    }

    function close_screen() {
        setScreenOfCreation(false);
        setTimeout(() => setCreationContent(""), 330);
    }

    function handle_search_input(event) {
        if (!event.target.value.trim()) setCurrentShownTags([...inactiveTags]);
        else {
            setCurrentShownTags(
                inactiveTags.filter((tag) =>
                    is_substring(event.target.value, tag)
                )
            );
        }
    }

    //#endregion

    return (
        <div className="homepage">
            <SlideScreen
                shown={screenOfCreation}
                content={creationContent}
                close={close_screen}
            />
            <Clock />
            {sticks.length ? (
                sticks
            ) : (
                <div className="mep">
                    <p className="icon">{"\\（＞w＜）/"}</p>
                    <p className="message">
                        Nothing found, create a new habit, or reset your filters
                    </p>
                </div>
            )}
            <button className="add-habit" onClick={set_up_screen}></button>
            <aside
                className="aside"
                style={{ right: aside ? "0" : "calc(-1 * var(--width))" }}
            >
                <input
                    type="checkbox"
                    className="open-aside"
                    value={aside}
                    onChange={(event) => setAside(event.target.checked)}
                />
                <div className="filters">
                    <label htmlFor="filter-search-bar">
                        <span></span>
                        <input
                            id="filter-search-bar"
                            placeholder="search tag..."
                            type="text"
                            ref={asideInputRef}
                            onChange={handle_search_input}
                        />
                    </label>
                    <div className="current-filters">
                        {currentTags.map((tag) => (
                            <div
                                key={`current-thing-${tag}`}
                                className="tag"
                                onClick={() => remove_from_current(tag)}
                            >
                                <button className="remove-tag"></button>
                                <p>{tag}</p>
                            </div>
                        ))}
                    </div>
                    <div className="controls">
                        <button
                            className="clear-filters"
                            onClick={clear_all_tags}
                        >
                            Clear all tags
                        </button>
                    </div>
                    <Toggle
                        checked={orFilter}
                        change={set_logic_filter}
                        left="AND"
                        right="OR"
                        changeOnLabelClick={true}
                    />
                    <div className="divider"></div>
                    <div className="tags">
                        {currentShownTags.length ? (
                            currentShownTags.map((tag) => (
                                <div
                                    key={`tag-${tag}`}
                                    className="tag"
                                    onClick={() => add_to_current(tag)}
                                >
                                    <button className="add-tag"></button>
                                    <p>{tag}</p>
                                </div>
                            ))
                        ) : (
                            <p className="no-pan">No tags found!</p>
                        )}
                    </div>
                </div>
            </aside>
        </div>
    );
}
