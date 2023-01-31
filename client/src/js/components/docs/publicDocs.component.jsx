import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import jwtDecode from 'jwt-decode';

let myId;
let userName;
const token = (window.localStorage.getItem('token'));
if (token) {
  myId = jwtDecode(token).userId;
  userName = jwtDecode(token).userName;
}

const PublicDocs = (props) => {
  let documentList;
  if (props.documents !== undefined) {
    documentList = props.documents
    .filter((document) => {
      return (document.userId === myId) && (document.access === 'public');
    })
    .map((document) => {
      return (
        <SingleDocument document={document} key={document.id} setEditDocument={props.setEditDocument} setViewDocument={() => props.setViewDocument(document)} setDeleteDocument={props.setDeleteDocument} />
      )
    })
  }
  return (
    <div>
      <table className="bordered responsive">
        <thead>
          <tr>
              <th>Title</th>
              <th>Access</th>
              <th>Content</th>
              <th>Published date</th>
              <th>Updated date</th>
          </tr>
        </thead>
        <tbody>
          { documentList }
        </tbody>
      </table>
    </div>
  )
}

const SingleDocument = (props) => {
  const { document } = props
  return (
    <tr className="hoverable">
      <td>{ document.title }</td>
      <td>{ document.access }</td>
      <td className="truncate"><a href="#modalView" dangerouslySetInnerHTML={{ __html: document.content}} onClick={() => { props.setViewDocument(document); }} /></td>
      <td>{ (document.createdAt).slice(0, 10) }</td>
      <td>{(document.updatedAt).slice(0, 10)}</td>
      <td><a className="modal-trigger green-text" href="#modal1" onClick={()=>{ props.setEditDocument(document); }}><i className="material-icons">edit</i></a></td>
      <td><a className="red-text" href="#" onClick={()=>{ props.setDeleteDocument(document.id); }} > <i className="material-icons">delete</i></a></td>
    </tr>
  );
}

export default PublicDocs;