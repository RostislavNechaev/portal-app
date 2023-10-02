import axios from "axios";

class JobService{
    public readonly clientUrl = process.env.REACT_APP_URL ?? "http://localhost:85";   
 }

export default JobService;
