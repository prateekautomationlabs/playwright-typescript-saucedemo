import {BasePage} from './basePage';
import {expect} from '@playwright/test';

export class InventoryPage extends BasePage{

    private readonly inventoryList = ()=> this.page.getByTestId('inventory-list');
    private readonly inventoryItems =()=> this.page.getByTestId('inventory-item');
    private readonly itemNames =()=> this.page.getByTestId('inventory-item-name');

    async verifyInventoryListVisible(){
        await expect (this.inventoryList()).toBeVisible();
    }

    async getInventoryItemCount():Promise<number>{
        return await this.inventoryItems().count();
    }

    async findItemByName(itemName: string){
        return this.itemNames().filter({hasText: itemName});
    }

    async verifyItemExists(itemName: string){
        const item = await this.findItemByName(itemName);
        await expect(item).toBeVisible();
    }

   }