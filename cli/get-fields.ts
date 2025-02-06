#!/usr/bin/env node

import { products } from '../src/products';

// Function to get unique values from an array of arrays
function getUniqueValues(arrays: string[][]): string[] {
  const uniqueSet = new Set<string>();
  arrays.forEach((array) => {
    array.forEach((item) => {
      if (item) {
        // Only add non-empty strings
        uniqueSet.add(item);
      }
    });
  });
  return Array.from(uniqueSet).sort();
}

// Function to find products without tags
function findProductsWithoutTags(): { id: string; name: string }[] {
  return Object.entries(products)
    .filter(([_, product]) => !product.Tags || product.Tags.length === 0)
    .map(([_, product]) => ({
      id: product.id,
      name: product.Name,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Extract all Excludes and Tags from products
const excludes = Object.values(products).map(
  (product) => product.Excludes || [],
);
const tags = Object.values(products).map((product) => product.Tags || []);

// Get unique values
const uniqueExcludes = getUniqueValues(excludes);
const uniqueTags = getUniqueValues(tags);
const productsWithoutTags = findProductsWithoutTags();

// Print results
console.log('=== Unique Excludes ===');
uniqueExcludes.forEach((exclude) => console.log(`- ${exclude}`));

console.log('\n=== Unique Tags ===');
uniqueTags.forEach((tag) => console.log(`- ${tag}`));

console.log('\n=== Products Without Tags ===');
if (productsWithoutTags.length === 0) {
  console.log('All products have tags');
} else {
  productsWithoutTags.forEach((product) =>
    console.log(`- ${product.name} (${product.id})`)
  );
  console.log(`\nTotal: ${productsWithoutTags.length} products without tags`);
}
