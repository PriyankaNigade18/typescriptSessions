

import fs from "fs";
import {parse} from "csv-parse/sync";

export class CsvHelper
{
    static readCsv(filepath:string):Record<string,string>[]
    {
        return parse(fs.readFileSync(filepath,'utf-8'),{
            columns:true,//first row as header
            skip_empty_lines:true,
            trim:true,



        }) as Record<string,string>[];
    }
}

/*
Record is existing collection in Js this will help
to store data, what kind of data which you fetch from csv file 
and we maintain it and return the same.
Records<key,value> pair

we are parsing data maintaining in the format of record and returning the same

*/
