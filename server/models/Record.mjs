import bookshelf from 'bookshelf';
import modelbase from 'bookshelf-modelbase';
import pool from '../pool';

const Record = bookshelf(pool);

Record.plugin('bookshelf-case-converter-plugin');
Record.plugin('bookshelf-secure-password');
Record.plugin('bookshelf-virtuals-plugin');
Record.plugin(modelbase.pluggable);

export default Record;
