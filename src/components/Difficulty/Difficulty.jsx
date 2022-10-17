import "./difficulty.css";

export default function Difficulty({ difficulty, update }) {
    return (
        <div className="difficulty-controls">
            <div className="labels">
                <label htmlFor="hard">Hard</label>
                <label htmlFor="medium">Medium</label>
                <label htmlFor="easy">Easy</label>
            </div>
            <div className="boxes">
                <input
                    type="checkbox"
                    id="hard"
                    checked={difficulty === 2}
                    onChange={update}
                />
                <input
                    type="checkbox"
                    id="medium"
                    checked={difficulty >= 1}
                    onChange={update}
                />
                <input
                    type="checkbox"
                    id="easy"
                    checked={true}
                    onChange={update}
                />
            </div>
        </div>
    );
}
