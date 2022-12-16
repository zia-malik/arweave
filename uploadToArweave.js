
import * as fs from 'fs';
import Arweave from 'arweave';


(async () => {

    const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false,
    });

    const walletJson = {"d":"iTRGWcy0TIYiNSM6qpPmfRhBb7e-0sAMsJ_PqjzW0b1G5egvEzk7x0aaOYHh0t05QWrJdxPbBrGsqa-5Spo0_HoXY1dq76khEvp4Yd2pC4Er-UbIZG3q76JV675EdhuZFy2JCRmNdjARsC1IJ-8bG9sbWGaFGj8Nwczz4g5zmzbk3Mne-s5QVbF6-kP756QzikruOKN6AW31gvslqqWnYUybov15rL8pFs5KaI-UtTxg61G1iZQiyJRMmeyKSpcRnzikLmR0DCEik_jkUA_rj8PT0rRD18ZsOcOm3eEAT36MhwgPoyY78_52TqSdQgMXEYMbmJRkIu6jDlkBXyLKLQt4NomjLTfro39jpfRfCwXn1vpYH7LD2fI8V3PMre2SEhq5z86nKYUqkSy-DIm4X3ab2RQoVCbz86E__CVdlfX812tlpzFl1IOUiVg6A9LuHYmMnbtcnd5YVrbzevHb52mC7jQQbAAjlsor2q5a4QI4fq9kW24dn3DAxca1IlJKdy1YUNeQ54XIEnVgooaGC6GApq2B9SLcNkGmsjhYGed9eqH3uoGZeAp-Uj94rOUblaYLUNVtAe9NYt6-gk1XNU87e10V1LbFYHik8VsSCnJWGxP_rVHahbvSyT6kccpeZrNEo7dqpI3iaMUo1Zrum86B7I5s8I9nzdgK-OXIUh0","dp":"iszfxR87Dt6XHw_ZXcEOLhpryjIsG8ETytzMzb-VBZQ95vYUu2a0j6WtAH9paKibwI2s-a6M5WvuMbBAEY5QqRjHn2GyBwE6oxeqEWn4p2-ut-fm3lhjhuejCWpAoEYp_tAKPa6Y6Q5_1UoBPNdBy4xrqrhYrrJ9xqfu-9BFEJ1qYC1vGNnj7WafctZeVNW95dTqhxePMQZevjqwsNxQa62rPNYOqXscnsSj8-_aBmWknW_-gyFi77qfzaWNxpwV961hadv75EKwESJfcuIdPq_ugWF_0n5C4oW-8VN9UVcpACMcDIBHMG7WnH_ZglUTQhgG7YOT-3kFuxEwhkD29Q","dq":"O2Xf47GjQETPO_zk8petVC9aJjFGC5fkuuCUEmE6e43NsdC8RNfBiViIhf50V-j-JXYj5Mwr-gfiY2NOmoHVQXyGuSNYgx59o7Mi4_wgYRQg54S6WFWmk-4UGHnSTbdE7TM6OWdZgAXHAlAYgmAwr2JfYjbN9rHqPVC4PtftgXKbDIOAP6ARdpdoBhdYNe-9euVD57F63mfry8JubderYOW7ssRWe4i7hiv7Kz7cc90RYu2-naDvfA9z_DImVMHJFGguLhakpkxgKjk-Fo6LqAfXybmKeikmoxRVFTGq3gtf0phDscuOXR4a1NbRDgWoNKTGL08bvKVHEhD0YxB66Q","e":"AQAB","kty":"RSA","n":"kWshVxLiF91zPlnYt-liGCXZvM_XTiwBpGp3e2eRVr8yzJbVmWtLJe23KRDLHSvF82w2TwGC9MmZ6Xiwzmu7De-MAHEyyluOXUYAX74zqhQLQSe0so_IBDHrO9ycmEVzPdNyFwmk_goxOekwkE1ytlygTPrCwmi8KRjZ9hTyf3dHgGHA_-CD9-Bfb3VROvm3VfyVGzP5A-3DSTHWIozPvk4-Fz8xPRCnnSqJJ7UJh5ZFpIYoYQy5T8VVBFCEPwRm2SvrWG4RtqsFJpIWROZRVYj4y1wQhvmahzSLQtUQd49XTsqu3Too69PG-KN_mmNXQQlqOFAayqZ_B3K9hhe-l6i-vX0ByYkGuYH9ofQm219OIvLGZc7qBf0Oso47dY7JNRfOSGKHppYD0FLlXhHfTpXZIS97O8UST1ysbrVl49kcR2PapuZqz_wcdPq-PtUAWCL7IgEyLsrf0VbcSQvZVmmWLEVEiBXt_MCCTlFxfGjGw6as2FSNcsOKD-ujCyjyJTeN9DsVW37OHc1fhzyiwVKXcuyGWSA_DaiixPkFRFiFlogVsWPo-pGe9lBRpf25_1kAVedHIm87Bz5ftjgm9qspHejdBufIh98vvBWA-owJbIzKTQ92sc5nJFxlqepQkrtq71dgqIAOT7lgOSFRH2bLLu_DJ2-mJ74CbdMoQ0E","p":"yu4phMwWmsbYNDcaFeAcDCgIhjgSci416UYSW7KTNm7KNaMpI42krv83MRr0i1BDq5PAZiHejm-0U9QDQQ_DddkxPayyRxX_Ij6lAe43Z4q1fgiDhmushj-tT6cOvMCKjcIH0oui-kwNaHysa0cYA3ZK5nL-Ifyq4PnxvnTlrW77M1FU3d2OTUuhKRhYyiVdiCd57eWPUH_VQzQW3TnWLDzZlFgbIso539H2VyAeR-75xRD2F5jfJTundWn1Q6mtHvvn310znf3aw3GAz_rK1d8FLn-ubKhMfF2fY04J095LuTUaB0QnKJImVAirV3Mhfu2PNKh1mEtkRhQxEMO14w","q":"t3KmBVOdlHxNaa7YFfbUkU7hCb2mfrJDTYP37bn9jGGW5J6k0IQbOtl3OUSZuZwusYnigKb58j7JXXHcXEV8fkKYp6rlS7PDnAWtX9-f1vChURcjJLkZKR9RlYV2XgW546CKvqGxn8SiC8OFRABsSDp4yvHEOnw5IFG3g4AsUOEGgQUf1rJFqoAOQPIIjox3nG6W0AzFRUgSxJM1U5r3Rb5tQijvvG5-5qjRIjz-DeqKfudcEMmtQJo6VnPxOGnAeQrK2U7uo5n3rtmLHuRHf64nr4ZAayxCvcejdnRMb0IJh78Gu4Pi9TI7-EyCWb3FWRfTEwdSzhEgqWFQfelLiw","qi":"OAkfjsnnu9G1dQi0gxJfW5J8LNLjSta8S580rXA33E4BIAa2gtld5B3l5qYqavTYPYnza-bNT9CplWM5QWDqSUnmc-CCynM6O_LEFsLvGVrjXh0AYH2ddM_VSkBOXL9u-fmZXZ7tV-V-cYREgoUKb9aHM1MWdsg1tX9SvlVa6HT2dnXy1nxYoucLSCySjJI2xH9BmDJ8XXfUgMWde8XSW5RqjSiBJWzzbJsexfNcIYLsvImVUFUSPsZ-3Gv7SOFkbvpfHxQ0Tx90RIzcof4eCqgd0TbPxtXF2Rucf32A_lVjnYXn5GnYGY8rr8LML7VpuI7PakOz9XhkjjP6tGJZ7w"};

    // Upload image to Arweave
    const data = fs.readFileSync('./zia.jpg');
    
    const transaction = await arweave.createTransaction({
        data: data
    });

    
    transaction.addTag('Content-Type', 'image/png');

    await arweave.transactions.sign(transaction, walletJson);
    

    const response = await arweave.transactions.post(transaction);
    
    console.log(response);

    const imageUrl = transaction.id ? `https://arweave.net/${transaction.id}` : undefined;

    console.log(imageUrl);
    // Upload metadata to Arweave

//     const metadata = {
//         name: "Custom NFT #1",
//         symbol: "CNFT",
//         description:
//           "A description about my custom NFT #1",
//         seller_fee_basis_points: 500,
//         external_url: "https://www.customnft.com/",
//         attributes: [
//             {
//                 trait_type: "NFT type",
//                 value: "Custom"
//             }
//         ],
//         collection: {
//           name: "Test Collection",
//           family: "Custom NFTs",
//         },
//         properties: {
//           files: [
//             {
//               uri: imageUrl,
//               type: "image/png",
//             },
//           ],
//           category: "image",
//           maxSupply: 0,
//           creators: [
//             {
//               address: "CBBUMHRmbVUck99mTCip5sHP16kzGj3QTYB8K3XxwmQx",
//               share: 100,
//             },
//           ],
//         },
//         image: imageUrl,
//       }

//     const metadataRequest = JSON.stringify(metadata);
    
//     const metadataTransaction = await arweave.createTransaction({
//         data: metadataRequest
//     });
    
//     metadataTransaction.addTag('Content-Type', 'application/json');
    
//     await arweave.transactions.sign(metadataTransaction, wallet);
    
//     await arweave.transactions.post(metadataTransaction);    
})();
