import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        }
    }

    handleFormSubmit = (e) =>{
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();              //서버에서 응답을 받은후 refresh
            })
        this.setState({                                 //전송을 위한 초기화
            file : null,
            name : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        })
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.name);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);

        const config ={                                     //전달하는 내용중 파일이 있을때!
            headers : { 
                'content-type' : 'multipart/form-data' 
            }
        }
        return post(url, formData, config);
    }

    handleFileChange = (e) =>{
        this.setState({
            file : e.target.files[0],    // e.target = 이벤트가 발생된 input값 
            fileName : e.target.value
        })
    }
    
    handleValueChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render()
    {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객추가</h1>
                프로필 이미지 : <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br />
                이름 : <input type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /><br />
                생년월일 : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br />
                성별 : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br />
                직업 : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br />
                <button type="추가하기">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;