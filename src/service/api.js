import fetchJsonp from 'fetch-jsonp/build/fetch-jsonp';

const getData = async(params) => {
    const { page } = params;
    var result = fetchJsonp(`https://c1.m.ifeng.com/api_wemedia_index?tag=home&cid=838783&pagesize=10&page=${page}`, {
    //   jsonpCallback: 'showData',
    //   timeout: 3000
    })

    return result;
};

export {
    getData 
};