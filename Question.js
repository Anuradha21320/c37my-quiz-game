class Question {
    constructor() {
      this.input = createInput("name");
      this.button = createButton("play");
      this.greeting = createElement("h2");
      this.title = createElement("h2");
      this.question = createElement("h2");
      this.option1 = createElement("h2");
      this.option2 = createElement("h2");
      this.input1 = createElement("h2");
      
      }
  
      hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }
  
    display(){
      this.title.html("MyQuiz Game");
      this.title.position(350,0);


     this.question.html("Question :-What starts and ends with the letter 'E', but has only one letter?");
     this.question.position(150,80);
     this.option1.html("1 : Everyone");
     this.option1.position(150,100);
     this.option2.html("2: Envelope");
     this.option2.position(150,120);

     this.input1.position(150,230);

      
      
  
    }
  }
  