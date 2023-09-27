import React ,{useState,useEffect} from 'react'
import './View.scss'
import { useLocation } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';
import Navbar from '../Navbar/Navbar';


export const View = () => {
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const data = location.state;

  const {updateComplaint} = useSignup()

  const [feedback,setFeedback] = useState("")

  const handleFeedback = (e) => {
      setFeedback(e.target.value);
  }

  const sendFeedback = async (e) => {
    const fb = feedback;
    setVisible(true);
    setFeedback("")
    await updateComplaint(data._id,data.idno,data.category,data.name,data.description,data.date,data.status,fb,new Date());
  }

    return (
      <>
      <div className='view'>

      <Navbar/>

        <div className="view-form-body">
          <div className="view-form-box">
              <form method='get'>
              <table>
                <tr>
                  <td className="tdwidth"><label htmlFor="idno" className='idone'>Complaint Name</label></td>
                  <td><span class="six">: {data.name}</span></td>
                </tr>
                <tr>
                  <td className="tdwidth"><label htmlFor="name" className='idtwo'>Date</label></td>
                  <td> <span class="two">: {data.date.substring(0,10)}</span></td>   
                </tr>
                <tr>
                <td className="tdwidth"><label htmlFor="phoneno" className='idthree'>Status</label>  </td>
                  <td> <span class="three">: {data.status}</span></td>
                </tr>
                <tr>
                  <td className="tdwidth"><label htmlFor="roomno" className='idfour'>Complaints Description </label></td>
                  <td><span class="five">: {data.description}</span></td>
                </tr>
              </table>
              </form>

            </div>


                <div className='view-feedback'>
                  <h2>Submit your feedback</h2>
                  <textarea typeof='text' value={feedback} onChange={handleFeedback} />
                  <button className='view-btn' type="submit" onClick={sendFeedback}>Submit</button>
                  
                  <span className='success' style={{visibility: visible ? 'visible' : 'hidden'}} >Feedback submitted successfully</span>
                </div>

          </div>
          </div>
        </>
    )}