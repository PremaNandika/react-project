import React from 'react'

export default function TheTable() {
  return (
    <table className="border-collapse border border-slate-500">
      <thead>
        <tr>
          <th className="border border-slate-600 p-2">State</th>
          <th className="border border-slate-600 p-2">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-700 p-2">Indiana</td>
          <td className="border border-slate-700">Indianapolis</td>
        </tr>
        <tr>
          <td className="border border-slate-700">Ohio</td>
          <td className="border border-slate-700">Columbus</td>
        </tr>
        <tr>
          <td className="border border-slate-700">Michigan</td>
          <td className="border border-slate-700">Detroit</td>
        </tr>
      </tbody>
    </table>
  )
}
