export class Workout {

    constructor(
    public workoutTitle: string,
    public workoutNote: string,
    public caloriesBurntPerMinute: number,
    public categoryId: number,
    public workoutId: number = 0,
    ) {}
}
