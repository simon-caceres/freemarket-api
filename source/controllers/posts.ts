import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import {BASEURL, CONSTRUCTINGDATA,COUNTRUCTINGDESCDATA} from '../utils';
import { requestType } from '../types';

const SEARCH: Function = (query: string) => { return `/sites/MLA/search?q=${query !== undefined ? query : ':query'}`};
const ITEMDETAIL: Function = (id: string) => {return `/items/${id}`};
const ITEMDESCRIPTION: Function = (id: string) => {return `/items/${id}/description`};


// getting all posts
const getItems = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    const { q } = req.query;
    
    let result: AxiosResponse = await axios.get(`${BASEURL}${SEARCH(q)}`);
    let data: requestType = CONSTRUCTINGDATA(result.data);
    return res.status(200).json({
        data
    });
};

// getting a single post
const getItemsById = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    const response: AxiosResponse = await axios.get(`${BASEURL}${ITEMDETAIL(id)}`);
    const resDescription: AxiosResponse = await axios.get(`${BASEURL}${ITEMDESCRIPTION(id)}`);
    const { data: idData } = response;
    const { data: descriptionData} = resDescription;
    let data: requestType = COUNTRUCTINGDESCDATA({...idData, ...descriptionData});
    return res.status(200).json({
        data
    });
};


export default { getItems, getItemsById };