import React, { useState } from 'react';
import { Container, ContentView, LoadingButton } from './style'
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function FileUpload() {
  const [Preview, setPreview] = useState(null);
  const [Upload, setUpload] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [ImageName, setImageName] = useState('')
  const [Content, setContent] = useState('');

  useEffect(() => {
    async function handlePreviewImg() {
      const data = new FormData();
      data.append('file', Upload);
      await axios.post("http://localhost:5000/upload", data, {
      }).then(res => {
        setPreview(`${process.env.REACT_APP_BASE_URL_API}/files/${res.data.filename}`);
        setImageName(res.data.filename)
      }).catch(err => {
        toast.error('Problema a carregar imagem...')
      })
    }
    Upload && handlePreviewImg()
  }, [Upload])

  const handleUploadImg = async (e) => {
    setLoading(true);
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL_API}/processing`, { ImageName });

    if (response.status === 200) {

      setContent(response.data.length > 0 ? response.data[0].hasOwnProperty('description') ? response.data[0].description : 'Texto não detectado na imagem.' : 'Texto não detectado na imagem.')

      toast.success('Requisição realizada com sucesso!')

    } else {
      toast.error('Falha ao obter dados da imagem!')
    }
    setLoading(false);
  }

  return (
    <Container>
      <h1><img src="https://lh3.googleusercontent.com/proxy/6fssckCIeyfhQX83_uqdEscUc9J7hg0mVEOgMOQ8YGtDvsl12NRCQS7T4ZlhGUNED0fc_jlfeJGa-A8MQwhA2EJT" alt="" style={{ 'maxWidth': '100%', 'maxHeight': 180 }} /></h1>

      <hr />
      <h3>Faça upload da imagem</h3>
      <label htmlFor="fileName">
        <img src={Preview} alt="Upload da imagem" style={Preview ? { 'display': 'block' } : { 'display': 'none' }} />
      </label>
      <input type="file" id="fileName" name="fileName" onChange={(e) => setUpload(e.target.files[0])} />

      <button onClick={handleUploadImg}>Processar imagem {Loading ? <LoadingButton /> : ''}</button>

      <ContentView>
        {Content}
      </ContentView>

    </Container>
  )
}

export default FileUpload