import { connect } from "mongoose";

const connection =(mongooseDatabasURI = 'mongodb://localhost:/model_example') => {
  connect(mongooseDatabasURI);
}

export default connection;