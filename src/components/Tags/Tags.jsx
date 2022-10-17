import { useRef } from "react";
import "./tags.css";

export default function Tags({ add_tag, tags, remove_tag }) {
    const inputRef = useRef(null);

    function add_new_tag() {
        const value = inputRef.current.value.trim();

        if (value && !tags.includes(value)) add_tag(value);
        inputRef.current.value = "";
    }

    return (
        <div className="tags-content">
            <div className="tag-input">
                <input type="text" ref={inputRef} />
                <button className="add-tag" type="button" onClick={add_new_tag}>
                    #Add tag
                </button>
            </div>
            <div className="tags">
                {tags.map((tag) => (
                    <div key={tag} className="tag">
                        <button
                            type="button"
                            className="remove-tag"
                            onClick={() => remove_tag(tag)}
                        ></button>
                        <p>{tag}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
