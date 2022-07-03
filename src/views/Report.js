import React from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Button
} from "reactstrap";

function Reports() {
  return (
<div className="content"> 
  <Row>
        <Col xs={12} md={6}>
        <Card>
         
            <CardBody>
                <FormGroup>
                    <Datetime
                        timeFormat={false}
                        inputProps={{placeholder:"Datetime Picker Here"}}
                    />
                </FormGroup>
            </CardBody>
        </Card>
    </Col>
    <Col>
  <Button color="primary">Search</Button>
    </Col>
  </Row>
</div>

    )
}

export default Reports;
