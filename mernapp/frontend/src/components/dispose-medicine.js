import React from "react";

const SafeMedicineDisposal = () => {
  const disposalMethods = [
    {
      title: "Mixing with Unpalatable Substances",
      description: "Combine with coffee grounds or cat litter, seal, and throw in the trash.",
      img: "https://files.oaiusercontent.com/file-G2wVQVUod9RezfnabP7tj9?se=2025-02-21T08%3A09%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dab16034b-a9d2-47b9-9fb8-d9d306b64fa9.webp&sig=zEhaIoSlpdRuAPFQINRfe7gqDEOH6SHUvfstcOZJyuQ%3D"
    },
    {
      title: "Drug Deactivation Systems",
      description: "Use kits that neutralize medications for safe trash disposal.",
      img: "https://files.oaiusercontent.com/file-KqEcKqq5uNRSRohLKXNnGX?se=2025-02-21T08%3A11%3A16Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd10e3f6d-f859-4e50-9601-4ec905f498ff.webp&sig=jMbZtlacZJabjAS3rhAk99teTNhnuibErq%2BLmmRcdiY%3D"
    },
    {
      title: "Return to Pharmacy",
      description: "Some pharmacies allow customers to return unused medications for safe disposal.",
      img: "https://files.oaiusercontent.com/file-3AnCzL6qdYenJg4oRygMJ5?se=2025-02-21T08%3A11%3A58Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd599d223-aa2f-4fc2-81b2-82995f2c2865.webp&sig=pcVNwCulHA5P7V8Z0iMPyUwdebwPDJ3BqtwpkNjR7PA%3D"
    },
    {
      title: "Household Trash Disposal",
      description: "Mix medications with unpalatable substances and dispose of in trash.",
      img: "https://files.oaiusercontent.com/file-Wj92AuEC5QhqKVGz7ztM5o?se=2025-02-21T08%3A12%3A44Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db0584388-b672-4da1-a6a0-42cccc23d65d.webp&sig=Lj%2BtY2Sgu05ZmfefHq9A1vg5sjLNmG/01XhypHCsTfQ%3D"
    },
    {
      title: "Biodegradable Bags",
      description: "Use biodegradable bags that safely break down medications when disposed of in trash.",
      img: "https://files.oaiusercontent.com/file-YQM5cbQLiu8bFcSRF7ysRB?se=2025-02-21T08%3A17%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D017ccb25-6f69-40e0-8838-43f8a2f11f0f.webp&sig=hAgJQ6HlcodJTdSLiQbfVMDInQfk07YayHXYiCnpcmE%3D"
    },
    {
      title: "Donation",
      description: "Some non-expired medicines can be donated to NGOs and health organizations.",
      img: "https://images.squarespace-cdn.com/content/v1/61d9bd448e4e00423cf1be6c/1642840323428-IK2N3GFFK3EEJSEE25I4/Medicines+for+donation.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-orange-300 p-6">
      <header className="bg-gray-700 text-white text-center p-6 text-2xl font-bold shadow-md rounded-md">
        Safe Medicine Disposal Techniques
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {disposalMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-center"
          >
            <img
              src={method.img}
              alt={method.title}
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
            />
            <h2 className="text-blue-600 text-xl font-semibold mt-4">{method.title}</h2>
            <p className="text-gray-700 mt-2">{method.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafeMedicineDisposal;