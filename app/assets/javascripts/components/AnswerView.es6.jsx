class AnswerView extends React.Component {
  render() {
    let data= this.props.data

    return (
      <li>{data["text"]}<br></br>
      {data["user"].username}
      </li>
      )
  }
}
