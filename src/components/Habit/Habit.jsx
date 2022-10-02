import Grid from "../Grid/Grid";

export default function Habit({ data, update }) {
    return (
        <div className="habit">
            <Grid habit={data} update_habit={update} />
        </div>
    );
}
