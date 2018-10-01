import React, { Component } from 'react'
import enhancedConnect from '../hoc/enhancedConnect'
import { fetchCreate } from '../actions/upload'
import Table from './Table'

const Errors = ({ errors }) => errors.map(error => (
  <p key={error.index} style={{ color: 'red' }}>{error.message}</p>
))

@enhancedConnect(state => ({
  upload: state.upload,
}), { fetchCreate })
class UploadCsv extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const { actions } = this.props

    const formData = new FormData()
    formData.append('file', this.fileInput.files[0])
    formData.append('name', this.fileName.value)

    actions.fetchCreate(formData)
      .then(() => {
        alert('Arquivo enviado com sucesso!')
      })
      .catch()
  }

  render() {
    const { upload } = this.props
    const { error } = upload

    return (
      <div>
        <h1>Upload a CSV File</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={(input) => { this.fileName = input }}
            type="text"
            name="name"
          />
          <input
            ref={(input) => { this.fileInput = input }}
            type="file"
            name="file"
            accept="text/csv"
            required
          />
          <input
            type="submit"
            value={upload.loading ? 'Loading...' : 'Send'}
          />
        </form>
        {
          Array.isArray(error) ? <Errors errors={error} /> : error
        }
        {
          upload.sentFiles.length === 0 ? null : (
            <Table
              header={[
                { key: 'id', name: 'id' },
                { key: 'name', name: 'name' },
                { key: 'created_at', name: 'created_at' },
              ]}
              values={upload.sentFiles}
            />
          )
        }
      </div>
    )
  }
}

export default UploadCsv
