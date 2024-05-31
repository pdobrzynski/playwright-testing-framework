import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { Env } from "@shared/utils/env";

export class BaseApi {
  readonly reqContext: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.reqContext = request;
  }

  protected async delete(uri: string, queryparams?: any) {
    let statusResponse: number;

    await test.step("DELETE", async () => {
      const response = await this.reqContext.delete(Env.URL + '/api' + uri, {
        headers: {
          accept: "application/json",
        },
        params: queryparams,
      });
      statusResponse = response.status();
      expect(response).toBeOK();
    });
  }

  protected async get(uri: string, statusCode: number): Promise <APIResponse> {
    let statusResponse: number;

    return await test.step("GET", async () => {
      const response = this.reqContext.get(Env.URL + '/api' + uri);
      statusResponse = (await response).status();
      expect(statusResponse).toBe(statusCode);
      return response;
    })
  }

  protected async post(uri: string, statusCode: number, body?: any): Promise <APIResponse> {
    let statusResponse: number;
    
    return await test.step("POST", async () => {
      const response = await this.reqContext.post(Env.URL + '/api' + uri, {
        headers: {
          'Content-Type': 'application/json'
        },
        data: body
      });
      statusResponse = response.status();
      expect(statusResponse).toBe(statusCode);
      return response;
    });
  }

  protected async put(uri: string, body: any, statusCode: number, queryparams?: any): Promise <APIResponse> {
    let statusResponse: number;

    return await test.step("PUT", async () => {
      const response = await this.reqContext.put(Env.URL + '/api' + uri, {
        headers: {
          'Content-Type': 'application/json'
        },
        data: body,
        params: queryparams,
      });
      statusResponse = response.status();
      expect(statusResponse).toBe(statusCode);
      return response;
    });
  }

  protected async patch(uri: string, statusCode: number, body?: any): Promise <APIResponse> {
    let statusResponse: number;

    return await test.step("PATCH", async () => {
      const response = await this.reqContext.patch(Env.URL + '/api' + uri, {
        data: body,
      });
      statusResponse = response.status();
      expect(statusResponse).toBe(statusCode);
      return response;
    });
  }
}