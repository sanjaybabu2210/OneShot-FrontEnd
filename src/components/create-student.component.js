import React, {Component} from 'react';
import axios from 'axios';


export default class addStudent extends Component {


    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeCollId = this.onChangeCollId.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        

        this.state = {
            id :'',
            name: '',
            year: '',
          
            collId: '',
            
            skills: ''
        }
    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeYear(e) {
        this.setState({
            year: e.target.value
        })
    }
    onChangeCollId(e) {
        this.setState({
            collId: e.target.value
        })
    }
    onChangeSkills(e) {
        this.setState({
            skills: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const student = {
            id: this.state.id,
            name: this.state.name,
            year: this.state.year,
           
            collegeId: this.state.collId,
         
            skills: this.state.skills

        }
        console.log(student);

        axios.post('https://glacial-wave-89509.herokuapp.com/addStudents/', student).then(res => {console.log(res.data);window.location = '/';});

        this.setState({
            id :'',
            name: '',
            year: '',
          
            collId: '',
            
            skills: ''
        })
        
        
    }


    render(){
        return (
            <div>
                
           <form onSubmit = {this.onSubmit} style={{ boxShadow:"1px 8px 6px 6px", width:"60%",backgroundColor:"#bbc4cc",borderRadius:10,padding:30,margin:'auto'}}>
           <h3>Add New student</h3>
                <div className = "form-group">
                    <label> Student Id:</label>
                    <input type="text" className="form-control" value = {this.state.id} onChange = {this.onChangeId} />

                </div>
                <div className = "form-group">
                    <label> Student Name:</label>
                    <input type="text" className="form-control" value = {this.state.name} onChange = {this.onChangeName} />

                </div>
                <div className = "form-group">
                    <label> Batch Year:</label>
                    <input type="text" className="form-control" value = {this.state.year} onChange = {this.onChangeYear} />

                </div>
            
                <div className = "form-group">
                    <label> CollegeID:</label>
                    <input type="text" className="form-control" value = {this.state.collId} onChange = {this.onChangeCollId} />

                </div>
               
                <div className = "form-group">
                    <label> Skills:</label>
                    <input type="text" className="form-control" value = {this.state.skills} onChange = {this.onChangeSkills} />

                </div> 
                <div className = "form-group" style={{marginTop:20,textAlign:'center'}}>
                
                    <input type="submit" className="btn btn-info btn-lg" />

                </div> 
           </form>
            </div>
        )
    }
}