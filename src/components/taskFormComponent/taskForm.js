import React from "react";


const Form = () => (

        <div>
        <div class="form-group">
          <label for="task-Title">Task Title</label>
          <input
            type="title"
            className="form-control"
            id="task-Title"
            placeholder="Title of Task Here"
          ></input>
        </div>
        <div class="form-group">
          <label for="more-details">Include more details here</label>
          <textarea className="form-control" id="details" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label for="repeat-Task">How often do you want to do this task?</label>
          <select className="form-control" id="repeat-Task">
            <option>Once a month</option>
            <option>bi-weekly</option>
            <option>Once a week</option>
            <option>Twice a week</option>
            <option>Everyday</option>
          </select>
        </div>
        <div class="form-group">
          <label for="importance">
            How important is this task towards your goals?
          </label>
          <select className="form-control" id="importance">
            <option>Very Important</option>
            <option>Important</option>
            <option>Somewhat Important</option>
            <option>Not Very Important</option>
            <option>Not important... maybe I need to rethink this one?</option>
          </select>
        </div>
        <div class="form-group">
          <label for="dueDate">Date to Finish Task</label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            placeholder="Enter the date this is due"
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

    )


export default Form;
