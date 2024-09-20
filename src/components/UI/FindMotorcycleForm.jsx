import { Form, FormGroup } from "reactstrap";
import "../../styles/find-motorcycle-form.css";

const FindMotorcycleForm = () => {
  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From Address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To Address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey Date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input className="journey__time" type="time" placeholder="Journey Time" required />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="default" selected="default"></option>
            <option value="cruiser">Cruiser Motorcycle</option>
            <option value="sports-bike">Sports Motorcycle</option>
            <option value="chopper">Chopper Motorcycle</option>
            <option value="touring">Touring Motorcycle</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__motorcycle-btn">Find Motorcycle</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindMotorcycleForm;