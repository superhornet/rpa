//Feature=>Daily Search for railroads
import { Given, When, Then } from '@wdio/cucumber-framework';
import { $, $$, browser } from '@wdio/globals';
import { expect } from 'expect-webdriverio';
// import assert from 'node:assert';

interface Railroad {
    id: number;
    name: string;
    active: boolean;
    class: number;
    description: string;
}
interface Locomotive {
    id: number;
    designation: string;
    type: string;
    description: string;
    builder: string;
}
let locomotives: Array<Locomotive>;
let railroads: Array<Railroad>;

Given('That I am on the homepage', async () => {
    await browser.url('http://localhost:3000/');
    await expect(browser).toHaveTitle('Railroads Remote Process Automation');
    await $('#quicksearch').waitForDisplayed({ timeout: 5000 });
});

When('I search for these railroads:', async (table) => {
    // Convert Cucumber data table to array of objects
    railroads = table.hashes() // [{ line: 'Railroad Name', description: 'Railroad Description' }, ...]
        .map((row: Railroad) => ({
            id: row.id,
            name: row.name,
            active: row.active,
            class: row.class,
            description: row.description
        }));
    // for (const row of railroads) {
    //     setTimeout(() => {
    //         console.log(`${row.name}: ${row.description}`)
    //     },
    //         1000);
    // }

});

When('I search for these locomotives:', async (table) => {
    locomotives = table.hashes().map((row: Locomotive) => ({
        id: row.id,
        designation: row.designation,
        type: row.type,
        description: row.description,
        builder: row.builder
    }));
});
Then(`I enter the railroad into the search field`, async () => {
    const searchInput = $('#quicksearch');
    const searchButton = $('#quicksearchsubmit');
    for (const {name} of railroads) {
        await searchInput.clearValue();
        await searchInput.setValue(name);
        //await browser.keys('Enter');
        await searchButton.waitForEnabled();
        await searchButton.click();
    }
});
Then(`I enter the locomotive into the search field`, async () => {
    const searchInput = $('#quicksearch');
    const searchButton = $('#quicksearchsubmit');
    for (const {designation} of locomotives) {
        await searchInput.clearValue();
        await searchInput.setValue(designation);
        //await browser.keys('Enter');
        await searchButton.waitForEnabled();
        await searchButton.click();
    }
});
Then(`I should see results`, async () => {
    /*const searchText = $('#quicksearch');
    searchText.getValue()*/
    const results = $$('.result div');
    //const searchText = await $('#quicksearch').getText();
    //expect(searchText).not.toBe("");
    //for (const result of results) {
        // console.log(results, result, searchTextValue);
        await expect(results).toBeElementsArrayOfSize(3);
    //}
});