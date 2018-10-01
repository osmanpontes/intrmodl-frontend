import React, { Component } from 'react'
import enhancedConnect from '../hoc/enhancedConnect'
import { fetchShow } from '../actions/download'
import Table from './Table'

@enhancedConnect(state => ({
  download: state.download,
}), { fetchShow })
class ShowCsv extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      actions,
    } = this.props

    actions.fetchShow({ id })
  }

  handleLoad = () => {
    const {
      download: { cursor, loading },
      match: {
        params: { id },
      },
      actions,
    } = this.props

    if (cursor && !loading) {
      actions.fetchShow({
        id,
        cursor,
      })
    }
  }

  render() {
    const { download } = this.props
    const { error } = download

    return (
      <div>
        <h1>
          Loaded File:
          {' '}
          {download.name}
        </h1>
        <Table
          header={[
            { key: 'yard_id', name: 'Yard Code' },
            { key: 'employee_id', name: 'Employee Code' },
            { key: 'clock_in', name: 'Clock In' },
            { key: 'clock_out', name: 'Clock Out' },
          ]}
          values={download.value}
        />
        {
          download.loading ? <p>Loading ...</p> : null
        }
        <button
          type="button"
          onClick={this.handleLoad}
          hidden={!download.cursor}
        >
          {download.loading ? 'Loading...' : 'More'}
        </button>
        {
          error ? <p style={{ color: 'red' }}>{error.message}</p> : null
        }
      </div>
    )
  }
}

export default ShowCsv
