import { Given, When, Then } from '@wdio/cucumber-framework';
import { $, $$, browser} from '@wdio/globals';
import { expect } from 'expect-webdriverio';
import assert from 'node:assert';

Given('I am on the RPA search page', async () => {
    await browser.url('http://localhost:3000/search?query=florida%20east%20coast%20railway');
    await expect(browser).toHaveTitle('Search Results - florida east coast railway');
});

When('I search for {string}', async (searchTerm) => {
    const searchBox = $('[name="search"]');
    await searchBox.setValue(searchTerm);
    await browser.keys('Enter');
});

Then('I should see results related to {string}', async (searchTerm) => {
    const results = $$('#results .result');
    assert(await results.length > 0, 'No search results found');
    const pageText = await browser.getPageSource();
    assert(pageText.includes(searchTerm), `Results do not contain "${searchTerm}"`);
});
