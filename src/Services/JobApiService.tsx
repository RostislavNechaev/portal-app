import axios from 'axios';
import JobService from './ApiService';
import { Guid } from 'guid-typescript';
import { JobCreateRequest } from '../Interfaces/Job';

class JobApiService extends JobService{

    public createJob(obj: JobCreateRequest):Promise<Guid>
    {
      return axios.post(`${this.clientUrl}/api/Job/Create`, obj, 
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
     .then(x=> x.data
      ).catch(x=> "Не удалось сохранить вакансию")
  } 
}
export default JobApiService;