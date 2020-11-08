class User{
    constructor(name, age){
      this.name = name
      this.age = age
    }
  
    get name(){
      return this._name
    }
  
    set name(str){
      this._name = str === "heel" ? "awfefaewf" : "not a num"
    }
  
    get age(){
      return this._age 
    }
  
    set age(value){
      this._age= value < 0 ? 0 : value
    }
  
  }
  
  let hong = new User("heel",21)
  let gil = new User("hehe", 23)
  
  console.log(hong, gil)
  
  gil.age = 10
  
  console.log(gil)