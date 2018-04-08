export class Workout {

    constructor(
    public Workout_Title: string,
    public Workout_Note: string,
    public CaloriesBurntPerMinute: number,
    public Category_Id: number,
    public Workout_Id: number = 0,
    ) {}
}
