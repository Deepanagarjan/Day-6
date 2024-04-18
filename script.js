//class
// 1-a.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
// class Movie{
//     constructor(title,studio=7-SCREEN,rating="8.5"){
//         this.title=title;                //key: value   ///leo=title
//         this.studio=studio;
//         this.rating=rating;

//     }
// }
// const obj =new Movie ("leo","7-screen studio","7.5");



//1-b.
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided?
// / class Movie{
    //     constructor(title,studio=7-SCREEN,rating="PG"){
    //         this.title=title;                //key: value   ///leo=title
    //         this.studio=studio;
    //         this.rating=rating;
    
    //     }
    // }
// const obj1=new Movie("vikram","RKFI","8.5");
// console.log(obj1.title,obj1.studio,obj1.rating);

//1-d. d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
// class Casino{
//     constructor(title,studio,rating){
//         this.title=title;                
//         this.studio=studio;
//         this.rating=rating;
    

//     }
// }
// const obj3=new Casino("casino royale","Eon Productions","PG13");
// console.log(obj3.title,obj3.studio,obj3.rating);

// class practice
// 3.
// class Person{
//     constructor(name,age,gender,martialstatus,contact,email){
//         this.name=name;                
//         this.age=age;
//         this.gender=gender;
//         this.martialstatus=martialstatus;
//         this.contact=contact;
//         this.email=email;

//     }
// }
// const obj=new Person("DEEPA","27","female","unmarried","8870820844","deepanaagarajan1208@gmail.com");
// console.log(obj.name,obj.age,obj.gender,obj.martialstatus,obj.contact,obj.email);

// practice
// class Car{
//     constructor(brand,color,model,type,price,section){
//         this.brand=brand;                
//         this.color=color;
//         this.model=model;
//         this.type=type;
//         this.price=price;
//         this.section=section;

//     }
// }
// const obj2=new Car("G-CLASS","Polar White"," boxy shape","DIESEL","$130,000 USD","TRIM LEVEL");
// console.log(obj2.brand,obj2.color,obj2.model,obj2.type,obj2.price,obj2.section);

// ques2   https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// class Circle{
//     Constructor(radius,color){
//         this.radius=radius
//         this.color=color;
//     }
//     get Radius(){
//         return this.radius
//     }
//     set Radius(n){
//         this.Radius = n;
//     }
//     get Color(){
//        return this.color;
//     }
//     set Color(c){
//         this.color=c;
//     }
//     get toString(){
//         return `"Circle[radius ${this.radius}, color = ${this.color}]"`
//     }
//     get area(){
//         return Math.PI+Math.pow(this.radius,2)
//     }
//     get Circumference(){
//         return 2*Math.PI*this.radius;

//     }
// }
// let res = new Circle(1.0,"red")
// console.log(res.Radius);
// console.log(res,Color);
// console.log(res,toString);
// console.log(res,area);
// console.log(res,Circumference);
// res.Radius=3.5;             //set
// console.log(res.Radius)
// res.Color="green";
// console.log(res.Color);

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie{
        constructor(title,studio,rating="PG"){
            this.title=title;                //key: value   ///leo=title
            this.studio=studio;
            this.rating=rating;
    
        }
        static getPG(movies){
            return movies.filter(movie=>rating==="PG")
        
    let pgMovies = [];
        for (const movie of movies) {
            if (movie.rating === "PG") {
                pgMovies.push(Movie);
            }
        }
        return pgMovies;
    }
}

// Example usage:
const movies = [
    new Movie("leo", "Studio1", "PG"),
    new Movie("vikram", "Studio2", "PG-13"),
    new Movie("gilli", "Studio3", "PG"),
    new Movie("varisu", "Studio4", "R")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

// 4.write a class to calculate the Uber price.
class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKm, timeInMinutes) {
        const distanceCost = this.costPerKm * distanceInKm;
        const timeCost = this.costPerMinute * timeInMinutes;
        const totalCost = this.baseFare + distanceCost + timeCost;
        return totalCost;
    }
}

const calculator = new UberPriceCalculator(5, 2, 0.5); // Base fare: 5, Cost per km: 2, Cost per minute: 0.5

const distance = 10; // Distance in kilometers
const time = 20; // Time in minutes

const totalPrice = calculator.calculatePrice(distance, time);
console.log("Total price:", totalPrice);



