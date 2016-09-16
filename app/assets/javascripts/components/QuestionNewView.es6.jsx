class QuestionNewView extends React.Component {
  constructor() {
    super()
    this.createQuestion = this.createQuestion.bind(this);
    }

     createQuestion(event) {
      event.preventDefault()
      var titleStuff = this.refs.title ,
      newQuestionTitle = titleStuff.value,
      textStuff = this.refs.text,
      newQuestionText = textStuff.value;

  $.ajax({
      url: '/questions.json',
      method: 'post',
      data: {
        question: {
          title: newQuestionTitle,
          text: newQuestionText
      }
    }
    }).done((response) => {
      this.props.newQuestion(response)
      titleStuff.value = "";
      textStuff.value = "";
    })
  }


  render(){
    return (
      <section>
        <p>Compose New Question</p>
        <form onSubmit={this.createQuestion.bind(this)}>
        <input ref="title" type="text" placeholder="title" name= "question[title]" /><br></br>
        <br></br>
          <textarea ref="text" name="question[text]"></textarea>
          <br></br>
          <input type="submit" value="Ask"/>
        </form>
        <br></br>
      </section>
    )
  }
}
