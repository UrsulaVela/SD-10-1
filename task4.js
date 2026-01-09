

export class FriendAge {
    constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
  }
  
  returnAge() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var age = 2025 - this.age;

    if (this.month > month | this.day > day) {
        age += 1;
    }

    return `${this.name} tiene ${age} hoy!`;
}
}
