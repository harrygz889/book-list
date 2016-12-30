import React, {Component} from 'react'

import Post from './Post'

//import posts array
import postsArray from './postsArray'


class Display extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {entries: postsArray}
  }

  handleSubmit(event) {
    this.state.entries.push({
      title: this.titleInput.value,
      author: this.authorInput.value,
      body: this.bodyText.value
    })
    event.preventDefault()
  }


  render() {
    return(
      <div>
        <Post entries={this.state.entries}/><br /> <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:<br />
            <input type={"text"} ref={(titleInput) => this.titleInput = titleInput}  className="input" />
          </label><br />
          <label>
            Author:<br />
            <input type="text" ref={(authorInput) => this.authorInput = authorInput} className="input" />
            </label> <br />
          <label>
            Body:<br />
            <textarea ref={(bodyText) => this.bodyText = bodyText} className="textAreaInput"/>
          </label> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Display
