import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { config } from 'dotenv';
let _ENV = config().parsed;

@Injectable()
export class ResponseService {
  send(
    res: Response,
    statusCode: number,
    data: any,
    message?: any,
    error?: any,
  ) {
    let jsonResponse = {};
    switch (statusCode) {
      case 200:
        jsonResponse = {
          message: message || 'Success',
          data,
          success: true,
        };
        break;
      case 204:
        jsonResponse = {
          message: message || 'No Content Found',
          data,
          success: true,
        };
        break;
      case 201:
        jsonResponse = {
          message: message || 'Created',
          data,
          success: true,
        };
        break;
      case 400:
        jsonResponse = {
          message: message || 'Bad Data Found',
          error: _ENV['ENV'] === 'development' ? error : '',
          data,
          success: false,
        };
        break;
      case 401:
        jsonResponse = {
          message: message || 'Un Authorized',
          data,
          success: false,
        };
        break;
      case 409:
        jsonResponse = {
          message: message || 'Duplicate data found.',
          error: _ENV['ENV'] === 'development' ? error : '',
          data,
          success: false,
        };
        break;
      case 500:
        jsonResponse = {
          message: message || 'Internal server error',
          error: _ENV['ENV'] === 'development' ? error : '',
          data,
          success: false,
        };
        break;
      case 503:
        jsonResponse = {
          message: message || 'Service Unavailable',
          error: _ENV['ENV'] === 'development' ? error : '',
          data,
          success: false,
        };
        break;
      default:
        jsonResponse = {
          message: message || 'Something Went Wrong.',
          error: _ENV['ENV'] === 'development' ? error : '',
          data,
          success: false,
        };
        break;
    }
    return res.status(statusCode).json(jsonResponse);
  }
}
