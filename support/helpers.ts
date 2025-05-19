import { test, expect, APIRequestContext } from '@playwright/test';


async function deleteByHelper(request: APIRequestContext , productName: string){
  await request.delete('https://www.saucedemo.com/cart.html' + productName);

}
