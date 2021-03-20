import React,{Component} from "react";
import '../App.css'
import CircularProgress from "@material-ui/core/CircularProgress";
import HistoryModal from "./HistoryModal";

class BasicUI extends Component{
    constructor(props) {
        super(props);
        this.state={
            question:'',
            history:[],
            loadingPage:true,
            loadingResponse:false,
            modalOpen:false,
            error:""
        }
    }

    validateInput=()=>{
        return this.state.question.endsWith("?");
    }

    setQuestion=(e)=>{
        this.setState({question:e.target.value});
    }

    async executeCall(){
        if (this.validateInput()){
            this.setState({loadingResponse:true},()=>{
                this.callEightBallAPI()
            });

        }
    }

    sanitize=(string)=>{
        return string.replaceAll("/","");
    }

    async callEightBallAPI(){
        let params = encodeURIComponent(this.sanitize(this.state.question));
        let uri = "https://8ball.delegator.com/magic/JSON/"+params;
        let response = await fetch(uri);
        let body = await response.json();
        this.appendToHistory(body['magic']);
        if (body['magic']['type']!=="Neutral"){
            this.setState({question:""});
        }
        let result = response.status === 200 ? "" : "Server unresponsive."
        this.setState({loadingResponse:false,error:result});
    }

    appendToHistory=(response)=>{
        let newHistory = this.state.history;
        if (this.state.history.length<10){
            newHistory.push(response);
        }else{
            newHistory.shift();
            newHistory.push(response);
        }
        this.setState({history:newHistory});
    }

    clearHistory=()=>{
        this.setState({history:[]});
    }

    getLastResponse=()=>{
        if (this.state.history.length>0){
            return this.state.history[this.state.history.length-1]
        }else{
            return {'answer':"",'question':"",'type':""};
        }
    }

    getResponseColor=(response)=>{
        switch (response['type']){
            case 'Affirmative':
                return "green";
            case "Contrary":
                return "red";
            default:
                return "black";
        }
    }

    componentDidMount() {
        this.setState({loadingPage:false});
    }

    toggleModal=()=>{
        this.setState({modalOpen:!this.state.modalOpen});
    }


    render() {
        let validQuestion = this.validateInput();
        let lastResponse = this.getLastResponse();
        if (this.state.loadingPage){
            return (
                <CircularProgress/>
            )
        }
        let response = this.state.loadingResponse ? <CircularProgress color="primary"/> : <p className='paragraphStyle' style={{'color':this.getResponseColor(lastResponse)}}>{lastResponse['answer']}</p>
        return(
            <div>
                <h1 className='headerStyle'>Magic 8-Ball</h1>
                <img className='imageStyle' src={this.props.image}/>
                <br/><br/>
                {response}
                <p className='paragraphStyle'>Ask the oracle:</p>
                <input type={"text"} className={validQuestion ? 'textFieldValidStyle' : 'textFieldInvalidStyle'} value={this.state.question} onChange={this.setQuestion}/>
                <p style={{"color":"white"}}>{validQuestion ? "":"Must end in a question mark"}</p>
                <p style={{"color":'red'}}>{this.state.error}</p>
                <button className={validQuestion ? 'buttonValid' : 'buttonInvalid'} onClick={()=>this.executeCall()}>Ask</button><br/><br/>
                <button className={this.state.history.length>0 ? 'buttonValid' : 'buttonInvalid'} onClick={()=>this.toggleModal()}>View History</button>
                <HistoryModal clear={this.clearHistory} getResponseColor={this.getResponseColor} history={this.state.history} open={this.state.modalOpen} toggle={this.toggleModal}/>
            </div>
        )
    }

}

export default BasicUI;
