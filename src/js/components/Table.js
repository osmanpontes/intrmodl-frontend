import React from 'react'

const style = { border: '1px solid black' }

const Table = ({ header, values }) => (
  <table style={style}>
    <thead>
      <tr>
        {
          header.map(({ key, name }) => <th key={key}>{name}</th>)
        }
      </tr>
    </thead>
    <tbody>
      {
        values.map(value => (
          <tr key={value.id}>
            {
              header.map(({ key }) => <td key={key}>{value[key]}</td>)
            }
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default Table
