import React from 'react';

// header : string[]
// data : {[key : string] : string}[]

const Table = ({
  header = [
    'Item Name',
    'Item type',
    'Item Purchase Date',
    'Item Selling Date',
    'Id',
  ],
  data = [
    {
      itemName: 'Pepsi',
      itemType: '1000 ML',
      itemPurchasingRate: 300,
      itemSellingRate: 320,
      id: 1651134582277,
    },
    {
      itemName: 'Pepsi',
      itemType: '1000 ML',
      itemPurchasingRate: 300,
      itemSellingRate: 320,
      id: 1651134582277,
    },
    {
      itemName: 'Pepsi',
      itemType: '1000 ML',
      itemPurchasingRate: 300,
      itemSellingRate: 320,
      id: 1651134582277,
    },
    {
      itemName: 'Pepsi',
      itemType: '1000 ML',
      itemPurchasingRate: 300,
      itemSellingRate: 320,
      id: 1651134582277,
    },
    {
      itemName: 'Pepsi',
      itemType: '1000 ML',
      itemPurchasingRate: 300,
      itemSellingRate: 320,
      id: 1651134582277,
    },
    {
      itemName: 'Pepsi',
      itemType: '1000 ML',
      itemPurchasingRate: 300,
      itemSellingRate: 320,
      id: 1651134582277,
    },
  ],
}) => {
  return (
    <div class="flex max-h-80 w-full">
      <div
        class="flex-grow overflow-auto  scrollbar-thin scrollbar-track-gray-200 
      scrollbar-thumb-dark-gray-400 scrollbar-hover-black"
      >
        <table class="relative w-full border">
          <thead>
            <tr>
              {header.map((header) => (
                <th class="sticky top-0 px-6 py-3 text-black bg-indigo-50">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody class="divide-y [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-blue-50">
            {data.map((object) => (
              <tr>
                {Object.values(object).map((data) => (
                  <td class="px-6 py-4 text-center">{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
