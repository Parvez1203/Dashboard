import { ShoppingCart, Package, RefreshCw } from 'react-feather';

function StatsCard() {
  const stores = [
    {
      name: 'Bricklink',
      isPrimary: true,
      lastChecked: '1 minute ago',
      stats: {
        orders: 6,
        lots: 0,
        items: 0,
      },
    },
    {
      name: 'Brick Owl',
      isPrimary: false,
      lastChecked: '1 minute ago',
      stats: {
        orders: 0,
        lots: 274,
        items: 22678,
      },
    },
  ];

  return (
    <div className="grid bg-white rounded-xl p-6 card-shadow pb-0">
      <div className="flex justify-between items-center mb-6 w-full">
        <span className="text-md font-semibold">Store Synchronisation</span>
        <button className="flex items-center gap-2 text-gray-400 hover:text-black">
          <RefreshCw size={18} />
          <span className="text-sm">Sync Inventory</span>
        </button>
      </div>
      <hr />
      <div className="">
        {stores.map((store) => (
          <div
            key={store.name}
            className="flex justify-between items-center py-4 border-gray-800"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{store.name}</span>
                {store.isPrimary && (
                  <span className="px-2 py-0.5 text-xs primary-element rounded">
                    Primary
                  </span>
                )}
              </div>
              <p className="text-[12px] text-gray-500 mt-1">
                Orders checked {store.lastChecked}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <ShoppingCart size={18} />
                <span className="text-sm">{store.stats.orders} orders</span>
              </div>
              <div className="flex items-center gap-2">
                <Package size={18} />
                <span className="text-sm">
                  {store.stats.lots} lots · {store.stats.items} items
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsCard;
