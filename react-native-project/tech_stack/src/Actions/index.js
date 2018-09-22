export const selectLibrary = (libraryId) =>{
return{
  type: 'select_libary',
  payload: libraryId
};
};

//여러 파일 리턴할 떄 default 안쓰고 export
