import styled from 'styled-components';
import CachedIcon from '@material-ui/icons/Cached';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex-direction: column;
  padding: 40px 0px;

input{
  display: none;
}
h1{
  background-color: none;
  display: block;
  margin-bottom: 20px
}
hr{
  width: 90%;
  height: 1px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0.1)
}
h3{
  padding: 20px 0px;
  color: rgba(0, 0, 0, 0.6)
}
label img, label{
  width: 400px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  display: block;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.2s;
  border: 1px dashed rgba(0, 0, 0, 0.3);
}

label img:hover, label:hover{
  background-color: rgba(0, 0, 0, 0.3);
}

button{
  background-color: #4BDB15;
  padding: 20px 40px;
  min-width: 200px;
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 60px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover{
  background-color: #2B850A;
  opacity: 1;
}`;

export const ContentView = styled.div`
  width: 90%;
  min-height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

export const LoadingButton = styled(CachedIcon)`
  margin-left: 15px;
  color: #fff;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% {  transform: rotate(359deg); }
}
&& {
    animation: spin 2s linear infinite;

}
`
