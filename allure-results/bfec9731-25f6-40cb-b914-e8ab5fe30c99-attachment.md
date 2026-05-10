# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.ts >> Register While Checkout
- Location: tests\Checkout.spec.ts:45:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - img "Website for practice" [ref=e39]
    - textbox "Search Product" [ref=e40]
    - button "" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading "Category" [level=2] [ref=e48]
      - generic [ref=e49]:
        - heading " Women" [level=4] [ref=e52]:
          - link " Women" [ref=e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading " Men" [level=4] [ref=e58]:
          - link " Men" [ref=e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e64]:
          - link " Kids" [ref=e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - generic:
        - insertion:
          - generic:
            - iframe
      - generic [ref=e68]:
        - heading "Brands" [level=2] [ref=e69]
        - list [ref=e71]:
          - listitem [ref=e72]:
            - link "(6) Polo" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e74]: (6)
              - text: Polo
          - listitem [ref=e75]:
            - link "(5) H&M" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e77]: (5)
              - text: H&M
          - listitem [ref=e78]:
            - link "(5) Madame" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e80]: (5)
              - text: Madame
          - listitem [ref=e81]:
            - link "(3) Mast & Harbour" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e83]: (3)
              - text: Mast & Harbour
          - listitem [ref=e84]:
            - link "(4) Babyhug" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e86]: (4)
              - text: Babyhug
          - listitem [ref=e87]:
            - link "(3) Allen Solly Junior" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e89]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e90]:
            - link "(3) Kookie Kids" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e92]: (3)
              - text: Kookie Kids
          - listitem [ref=e93]:
            - link "(5) Biba" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e95]: (5)
              - text: Biba
    - generic [ref=e97]:
      - heading "All Products" [level=2] [ref=e98]
      - generic [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]:
            - img "ecommerce website products" [ref=e103]
            - heading "Rs. 500" [level=2] [ref=e104]
            - paragraph [ref=e105]: Blue Top
            - generic [ref=e106] [cursor=pointer]:
              - generic [ref=e107]: 
              - text: Add to cart
          - generic [ref=e108]:
            - heading "Rs. 500" [level=2] [ref=e109]
            - paragraph [ref=e110]: Blue Top
            - generic [ref=e111] [cursor=pointer]:
              - generic [ref=e112]: 
              - text: Add to cart
        - list [ref=e114]:
          - listitem [ref=e115]:
            - link " View Product" [ref=e116] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e117]: 
              - text: View Product
      - generic [ref=e119]:
        - generic [ref=e120]:
          - generic [ref=e121]:
            - img "ecommerce website products" [ref=e122]
            - heading "Rs. 400" [level=2] [ref=e123]
            - paragraph [ref=e124]: Men Tshirt
            - generic [ref=e125] [cursor=pointer]:
              - generic [ref=e126]: 
              - text: Add to cart
          - generic [ref=e127]:
            - heading "Rs. 400" [level=2] [ref=e128]
            - paragraph [ref=e129]: Men Tshirt
            - generic [ref=e130] [cursor=pointer]:
              - generic [ref=e131]: 
              - text: Add to cart
        - list [ref=e133]:
          - listitem [ref=e134]:
            - link " View Product" [ref=e135] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e136]: 
              - text: View Product
      - generic [ref=e138]:
        - generic [ref=e139]:
          - generic [ref=e140]:
            - img "ecommerce website products" [ref=e141]
            - heading "Rs. 1000" [level=2] [ref=e142]
            - paragraph [ref=e143]: Sleeveless Dress
            - generic [ref=e144] [cursor=pointer]:
              - generic [ref=e145]: 
              - text: Add to cart
          - generic [ref=e146]:
            - heading "Rs. 1000" [level=2] [ref=e147]
            - paragraph [ref=e148]: Sleeveless Dress
            - generic [ref=e149] [cursor=pointer]:
              - generic [ref=e150]: 
              - text: Add to cart
        - list [ref=e152]:
          - listitem [ref=e153]:
            - link " View Product" [ref=e154] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=e155]: 
              - text: View Product
      - generic [ref=e157]:
        - generic [ref=e158]:
          - generic [ref=e159]:
            - img "ecommerce website products" [ref=e160]
            - heading "Rs. 1500" [level=2] [ref=e161]
            - paragraph [ref=e162]: Stylish Dress
            - generic [ref=e163] [cursor=pointer]:
              - generic [ref=e164]: 
              - text: Add to cart
          - generic [ref=e165]:
            - heading "Rs. 1500" [level=2] [ref=e166]
            - paragraph [ref=e167]: Stylish Dress
            - generic [ref=e168] [cursor=pointer]:
              - generic [ref=e169]: 
              - text: Add to cart
        - list [ref=e171]:
          - listitem [ref=e172]:
            - link " View Product" [ref=e173] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=e174]: 
              - text: View Product
      - generic [ref=e176]:
        - generic [ref=e177]:
          - generic [ref=e178]:
            - img "ecommerce website products" [ref=e179]
            - heading "Rs. 600" [level=2] [ref=e180]
            - paragraph [ref=e181]: Winter Top
            - generic [ref=e182] [cursor=pointer]:
              - generic [ref=e183]: 
              - text: Add to cart
          - generic [ref=e184]:
            - heading "Rs. 600" [level=2] [ref=e185]
            - paragraph [ref=e186]: Winter Top
            - generic [ref=e187] [cursor=pointer]:
              - generic [ref=e188]: 
              - text: Add to cart
        - list [ref=e190]:
          - listitem [ref=e191]:
            - link " View Product" [ref=e192] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=e193]: 
              - text: View Product
      - generic [ref=e195]:
        - generic [ref=e196]:
          - generic [ref=e197]:
            - img "ecommerce website products" [ref=e198]
            - heading "Rs. 400" [level=2] [ref=e199]
            - paragraph [ref=e200]: Summer White Top
            - generic [ref=e201] [cursor=pointer]:
              - generic [ref=e202]: 
              - text: Add to cart
          - generic [ref=e203]:
            - heading "Rs. 400" [level=2] [ref=e204]
            - paragraph [ref=e205]: Summer White Top
            - generic [ref=e206] [cursor=pointer]:
              - generic [ref=e207]: 
              - text: Add to cart
        - list [ref=e209]:
          - listitem [ref=e210]:
            - link " View Product" [ref=e211] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=e212]: 
              - text: View Product
      - generic [ref=e214]:
        - generic [ref=e215]:
          - generic [ref=e216]:
            - img "ecommerce website products" [ref=e217]
            - heading "Rs. 1000" [level=2] [ref=e218]
            - paragraph [ref=e219]: Madame Top For Women
            - generic [ref=e220] [cursor=pointer]:
              - generic [ref=e221]: 
              - text: Add to cart
          - generic [ref=e222]:
            - heading "Rs. 1000" [level=2] [ref=e223]
            - paragraph [ref=e224]: Madame Top For Women
            - generic [ref=e225] [cursor=pointer]:
              - generic [ref=e226]: 
              - text: Add to cart
        - list [ref=e228]:
          - listitem [ref=e229]:
            - link " View Product" [ref=e230] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=e231]: 
              - text: View Product
      - generic [ref=e233]:
        - generic [ref=e234]:
          - generic [ref=e235]:
            - img "ecommerce website products" [ref=e236]
            - heading "Rs. 700" [level=2] [ref=e237]
            - paragraph [ref=e238]: Fancy Green Top
            - generic [ref=e239] [cursor=pointer]:
              - generic [ref=e240]: 
              - text: Add to cart
          - generic [ref=e241]:
            - heading "Rs. 700" [level=2] [ref=e242]
            - paragraph [ref=e243]: Fancy Green Top
            - generic [ref=e244] [cursor=pointer]:
              - generic [ref=e245]: 
              - text: Add to cart
        - list [ref=e247]:
          - listitem [ref=e248]:
            - link " View Product" [ref=e249] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=e250]: 
              - text: View Product
      - generic [ref=e252]:
        - generic [ref=e253]:
          - generic [ref=e254]:
            - img "ecommerce website products" [ref=e255]
            - heading "Rs. 499" [level=2] [ref=e256]
            - paragraph [ref=e257]: Sleeves Printed Top - White
            - generic [ref=e258] [cursor=pointer]:
              - generic [ref=e259]: 
              - text: Add to cart
          - generic [ref=e260]:
            - heading "Rs. 499" [level=2] [ref=e261]
            - paragraph [ref=e262]: Sleeves Printed Top - White
            - generic [ref=e263] [cursor=pointer]:
              - generic [ref=e264]: 
              - text: Add to cart
        - list [ref=e266]:
          - listitem [ref=e267]:
            - link " View Product" [ref=e268] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=e269]: 
              - text: View Product
      - generic [ref=e271]:
        - generic [ref=e272]:
          - generic [ref=e273]:
            - img "ecommerce website products" [ref=e274]
            - heading "Rs. 359" [level=2] [ref=e275]
            - paragraph [ref=e276]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e277] [cursor=pointer]:
              - generic [ref=e278]: 
              - text: Add to cart
          - generic [ref=e279]:
            - heading "Rs. 359" [level=2] [ref=e280]
            - paragraph [ref=e281]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e282] [cursor=pointer]:
              - generic [ref=e283]: 
              - text: Add to cart
        - list [ref=e285]:
          - listitem [ref=e286]:
            - link " View Product" [ref=e287] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=e288]: 
              - text: View Product
      - generic [ref=e290]:
        - generic [ref=e291]:
          - generic [ref=e292]:
            - img "ecommerce website products" [ref=e293]
            - heading "Rs. 278" [level=2] [ref=e294]
            - paragraph [ref=e295]: Frozen Tops For Kids
            - generic [ref=e296] [cursor=pointer]:
              - generic [ref=e297]: 
              - text: Add to cart
          - generic [ref=e298]:
            - heading "Rs. 278" [level=2] [ref=e299]
            - paragraph [ref=e300]: Frozen Tops For Kids
            - generic [ref=e301] [cursor=pointer]:
              - generic [ref=e302]: 
              - text: Add to cart
        - list [ref=e304]:
          - listitem [ref=e305]:
            - link " View Product" [ref=e306] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=e307]: 
              - text: View Product
      - generic [ref=e309]:
        - generic [ref=e310]:
          - generic [ref=e311]:
            - img "ecommerce website products"
            - heading "Rs. 679" [level=2] [ref=e312]
            - paragraph [ref=e313]: Full Sleeves Top Cherry - Pink
            - generic [ref=e314] [cursor=pointer]:
              - generic [ref=e315]: 
              - text: Add to cart
          - generic [ref=e316]:
            - heading "Rs. 679" [level=2] [ref=e317]
            - paragraph [ref=e318]: Full Sleeves Top Cherry - Pink
            - generic [ref=e319] [cursor=pointer]:
              - generic [ref=e320]: 
              - text: Add to cart
        - list [ref=e322]:
          - listitem [ref=e323]:
            - link " View Product" [ref=e324] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=e325]: 
              - text: View Product
      - generic [ref=e327]:
        - generic [ref=e328]:
          - generic [ref=e329]:
            - img "ecommerce website products"
            - heading "Rs. 315" [level=2] [ref=e330]
            - paragraph [ref=e331]: Printed Off Shoulder Top - White
            - generic [ref=e332] [cursor=pointer]:
              - generic [ref=e333]: 
              - text: Add to cart
          - generic [ref=e334]:
            - heading "Rs. 315" [level=2] [ref=e335]
            - paragraph [ref=e336]: Printed Off Shoulder Top - White
            - generic [ref=e337] [cursor=pointer]:
              - generic [ref=e338]: 
              - text: Add to cart
        - list [ref=e340]:
          - listitem [ref=e341]:
            - link " View Product" [ref=e342] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=e343]: 
              - text: View Product
      - generic [ref=e345]:
        - generic [ref=e346]:
          - generic [ref=e347]:
            - img "ecommerce website products"
            - heading "Rs. 478" [level=2] [ref=e348]
            - paragraph [ref=e349]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e350] [cursor=pointer]:
              - generic [ref=e351]: 
              - text: Add to cart
          - generic [ref=e352]:
            - heading "Rs. 478" [level=2] [ref=e353]
            - paragraph [ref=e354]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e355] [cursor=pointer]:
              - generic [ref=e356]: 
              - text: Add to cart
        - list [ref=e358]:
          - listitem [ref=e359]:
            - link " View Product" [ref=e360] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=e361]: 
              - text: View Product
      - generic [ref=e363]:
        - generic [ref=e364]:
          - generic [ref=e365]:
            - img "ecommerce website products"
            - heading "Rs. 1200" [level=2] [ref=e366]
            - paragraph [ref=e367]: Little Girls Mr. Panda Shirt
            - generic [ref=e368] [cursor=pointer]:
              - generic [ref=e369]: 
              - text: Add to cart
          - generic [ref=e370]:
            - heading "Rs. 1200" [level=2] [ref=e371]
            - paragraph [ref=e372]: Little Girls Mr. Panda Shirt
            - generic [ref=e373] [cursor=pointer]:
              - generic [ref=e374]: 
              - text: Add to cart
        - list [ref=e376]:
          - listitem [ref=e377]:
            - link " View Product" [ref=e378] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=e379]: 
              - text: View Product
      - generic [ref=e381]:
        - generic [ref=e382]:
          - generic [ref=e383]:
            - img "ecommerce website products"
            - heading "Rs. 1050" [level=2] [ref=e384]
            - paragraph [ref=e385]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e386] [cursor=pointer]:
              - generic [ref=e387]: 
              - text: Add to cart
          - generic [ref=e388]:
            - heading "Rs. 1050" [level=2] [ref=e389]
            - paragraph [ref=e390]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e391] [cursor=pointer]:
              - generic [ref=e392]: 
              - text: Add to cart
        - list [ref=e394]:
          - listitem [ref=e395]:
            - link " View Product" [ref=e396] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=e397]: 
              - text: View Product
      - generic [ref=e399]:
        - generic [ref=e400]:
          - generic [ref=e401]:
            - img "ecommerce website products"
            - heading "Rs. 1190" [level=2] [ref=e402]
            - paragraph [ref=e403]: Cotton Mull Embroidered Dress
            - generic [ref=e404] [cursor=pointer]:
              - generic [ref=e405]: 
              - text: Add to cart
          - generic [ref=e406]:
            - heading "Rs. 1190" [level=2] [ref=e407]
            - paragraph [ref=e408]: Cotton Mull Embroidered Dress
            - generic [ref=e409] [cursor=pointer]:
              - generic [ref=e410]: 
              - text: Add to cart
        - list [ref=e412]:
          - listitem [ref=e413]:
            - link " View Product" [ref=e414] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=e415]: 
              - text: View Product
      - generic [ref=e417]:
        - generic [ref=e418]:
          - generic [ref=e419]:
            - img "ecommerce website products"
            - heading "Rs. 1530" [level=2] [ref=e420]
            - paragraph [ref=e421]: Blue Cotton Indie Mickey Dress
            - generic [ref=e422] [cursor=pointer]:
              - generic [ref=e423]: 
              - text: Add to cart
          - generic [ref=e424]:
            - heading "Rs. 1530" [level=2] [ref=e425]
            - paragraph [ref=e426]: Blue Cotton Indie Mickey Dress
            - generic [ref=e427] [cursor=pointer]:
              - generic [ref=e428]: 
              - text: Add to cart
        - list [ref=e430]:
          - listitem [ref=e431]:
            - link " View Product" [ref=e432] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=e433]: 
              - text: View Product
      - generic [ref=e435]:
        - generic [ref=e436]:
          - generic [ref=e437]:
            - img "ecommerce website products"
            - heading "Rs. 1600" [level=2] [ref=e438]
            - paragraph [ref=e439]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e440] [cursor=pointer]:
              - generic [ref=e441]: 
              - text: Add to cart
          - generic [ref=e442]:
            - heading "Rs. 1600" [level=2] [ref=e443]
            - paragraph [ref=e444]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e445] [cursor=pointer]:
              - generic [ref=e446]: 
              - text: Add to cart
        - list [ref=e448]:
          - listitem [ref=e449]:
            - link " View Product" [ref=e450] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=e451]: 
              - text: View Product
      - generic [ref=e453]:
        - generic [ref=e454]:
          - generic [ref=e455]:
            - img "ecommerce website products"
            - heading "Rs. 1100" [level=2] [ref=e456]
            - paragraph [ref=e457]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e458] [cursor=pointer]:
              - generic [ref=e459]: 
              - text: Add to cart
          - generic [ref=e460]:
            - heading "Rs. 1100" [level=2] [ref=e461]
            - paragraph [ref=e462]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e463] [cursor=pointer]:
              - generic [ref=e464]: 
              - text: Add to cart
        - list [ref=e466]:
          - listitem [ref=e467]:
            - link " View Product" [ref=e468] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=e469]: 
              - text: View Product
      - generic [ref=e471]:
        - generic [ref=e472]:
          - generic [ref=e473]:
            - img "ecommerce website products"
            - heading "Rs. 849" [level=2] [ref=e474]
            - paragraph [ref=e475]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e476] [cursor=pointer]:
              - generic [ref=e477]: 
              - text: Add to cart
          - generic [ref=e478]:
            - heading "Rs. 849" [level=2] [ref=e479]
            - paragraph [ref=e480]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e481] [cursor=pointer]:
              - generic [ref=e482]: 
              - text: Add to cart
        - list [ref=e484]:
          - listitem [ref=e485]:
            - link " View Product" [ref=e486] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=e487]: 
              - text: View Product
      - generic [ref=e489]:
        - generic [ref=e490]:
          - generic [ref=e491]:
            - img "ecommerce website products"
            - heading "Rs. 1299" [level=2] [ref=e492]
            - paragraph [ref=e493]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e494] [cursor=pointer]:
              - generic [ref=e495]: 
              - text: Add to cart
          - generic [ref=e496]:
            - heading "Rs. 1299" [level=2] [ref=e497]
            - paragraph [ref=e498]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e499] [cursor=pointer]:
              - generic [ref=e500]: 
              - text: Add to cart
        - list [ref=e502]:
          - listitem [ref=e503]:
            - link " View Product" [ref=e504] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=e505]: 
              - text: View Product
      - generic [ref=e507]:
        - generic [ref=e508]:
          - generic [ref=e509]:
            - img "ecommerce website products"
            - heading "Rs. 1000" [level=2] [ref=e510]
            - paragraph [ref=e511]: Green Side Placket Detail T-Shirt
            - generic [ref=e512] [cursor=pointer]:
              - generic [ref=e513]: 
              - text: Add to cart
          - generic [ref=e514]:
            - heading "Rs. 1000" [level=2] [ref=e515]
            - paragraph [ref=e516]: Green Side Placket Detail T-Shirt
            - generic [ref=e517] [cursor=pointer]:
              - generic [ref=e518]: 
              - text: Add to cart
        - list [ref=e520]:
          - listitem [ref=e521]:
            - link " View Product" [ref=e522] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=e523]: 
              - text: View Product
      - generic [ref=e525]:
        - generic [ref=e526]:
          - generic [ref=e527]:
            - img "ecommerce website products"
            - heading "Rs. 1500" [level=2] [ref=e528]
            - paragraph [ref=e529]: Premium Polo T-Shirts
            - generic [ref=e530] [cursor=pointer]:
              - generic [ref=e531]: 
              - text: Add to cart
          - generic [ref=e532]:
            - heading "Rs. 1500" [level=2] [ref=e533]
            - paragraph [ref=e534]: Premium Polo T-Shirts
            - generic [ref=e535] [cursor=pointer]:
              - generic [ref=e536]: 
              - text: Add to cart
        - list [ref=e538]:
          - listitem [ref=e539]:
            - link " View Product" [ref=e540] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=e541]: 
              - text: View Product
      - generic [ref=e543]:
        - generic [ref=e544]:
          - generic [ref=e545]:
            - img "ecommerce website products"
            - heading "Rs. 850" [level=2] [ref=e546]
            - paragraph [ref=e547]: Pure Cotton Neon Green Tshirt
            - generic [ref=e548] [cursor=pointer]:
              - generic [ref=e549]: 
              - text: Add to cart
          - generic [ref=e550]:
            - heading "Rs. 850" [level=2] [ref=e551]
            - paragraph [ref=e552]: Pure Cotton Neon Green Tshirt
            - generic [ref=e553] [cursor=pointer]:
              - generic [ref=e554]: 
              - text: Add to cart
        - list [ref=e556]:
          - listitem [ref=e557]:
            - link " View Product" [ref=e558] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=e559]: 
              - text: View Product
      - generic [ref=e561]:
        - generic [ref=e562]:
          - generic [ref=e563]:
            - img "ecommerce website products"
            - heading "Rs. 799" [level=2] [ref=e564]
            - paragraph [ref=e565]: Soft Stretch Jeans
            - generic [ref=e566] [cursor=pointer]:
              - generic [ref=e567]: 
              - text: Add to cart
          - generic [ref=e568]:
            - heading "Rs. 799" [level=2] [ref=e569]
            - paragraph [ref=e570]: Soft Stretch Jeans
            - generic [ref=e571] [cursor=pointer]:
              - generic [ref=e572]: 
              - text: Add to cart
        - list [ref=e574]:
          - listitem [ref=e575]:
            - link " View Product" [ref=e576] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=e577]: 
              - text: View Product
      - generic [ref=e579]:
        - generic [ref=e580]:
          - generic [ref=e581]:
            - img "ecommerce website products"
            - heading "Rs. 1200" [level=2] [ref=e582]
            - paragraph [ref=e583]: Regular Fit Straight Jeans
            - generic [ref=e584] [cursor=pointer]:
              - generic [ref=e585]: 
              - text: Add to cart
          - generic [ref=e586]:
            - heading "Rs. 1200" [level=2] [ref=e587]
            - paragraph [ref=e588]: Regular Fit Straight Jeans
            - generic [ref=e589] [cursor=pointer]:
              - generic [ref=e590]: 
              - text: Add to cart
        - list [ref=e592]:
          - listitem [ref=e593]:
            - link " View Product" [ref=e594] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=e595]: 
              - text: View Product
      - generic [ref=e597]:
        - generic [ref=e598]:
          - generic [ref=e599]:
            - img "ecommerce website products"
            - heading "Rs. 1400" [level=2] [ref=e600]
            - paragraph [ref=e601]: Grunt Blue Slim Fit Jeans
            - generic [ref=e602] [cursor=pointer]:
              - generic [ref=e603]: 
              - text: Add to cart
          - generic [ref=e604]:
            - heading "Rs. 1400" [level=2] [ref=e605]
            - paragraph [ref=e606]: Grunt Blue Slim Fit Jeans
            - generic [ref=e607] [cursor=pointer]:
              - generic [ref=e608]: 
              - text: Add to cart
        - list [ref=e610]:
          - listitem [ref=e611]:
            - link " View Product" [ref=e612] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=e613]: 
              - text: View Product
      - generic [ref=e615]:
        - generic [ref=e616]:
          - generic [ref=e617]:
            - img "ecommerce website products"
            - heading "Rs. 2300" [level=2] [ref=e618]
            - paragraph [ref=e619]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e620] [cursor=pointer]:
              - generic [ref=e621]: 
              - text: Add to cart
          - generic [ref=e622]:
            - heading "Rs. 2300" [level=2] [ref=e623]
            - paragraph [ref=e624]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e625] [cursor=pointer]:
              - generic [ref=e626]: 
              - text: Add to cart
        - list [ref=e628]:
          - listitem [ref=e629]:
            - link " View Product" [ref=e630] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=e631]: 
              - text: View Product
      - generic [ref=e633]:
        - generic [ref=e634]:
          - generic [ref=e635]:
            - img "ecommerce website products"
            - heading "Rs. 3000" [level=2] [ref=e636]
            - paragraph [ref=e637]: Cotton Silk Hand Block Print Saree
            - generic [ref=e638] [cursor=pointer]:
              - generic [ref=e639]: 
              - text: Add to cart
          - generic [ref=e640]:
            - heading "Rs. 3000" [level=2] [ref=e641]
            - paragraph [ref=e642]: Cotton Silk Hand Block Print Saree
            - generic [ref=e643] [cursor=pointer]:
              - generic [ref=e644]: 
              - text: Add to cart
        - list [ref=e646]:
          - listitem [ref=e647]:
            - link " View Product" [ref=e648] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=e649]: 
              - text: View Product
      - generic [ref=e651]:
        - generic [ref=e652]:
          - generic [ref=e653]:
            - img "ecommerce website products"
            - heading "Rs. 3500" [level=2] [ref=e654]
            - paragraph [ref=e655]: Rust Red Linen Saree
            - generic [ref=e656] [cursor=pointer]:
              - generic [ref=e657]: 
              - text: Add to cart
          - generic [ref=e658]:
            - heading "Rs. 3500" [level=2] [ref=e659]
            - paragraph [ref=e660]: Rust Red Linen Saree
            - generic [ref=e661] [cursor=pointer]:
              - generic [ref=e662]: 
              - text: Add to cart
        - list [ref=e664]:
          - listitem [ref=e665]:
            - link " View Product" [ref=e666] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=e667]: 
              - text: View Product
      - generic [ref=e669]:
        - generic [ref=e670]:
          - generic [ref=e671]:
            - img "ecommerce website products"
            - heading "Rs. 5000" [level=2] [ref=e672]
            - paragraph [ref=e673]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e674] [cursor=pointer]:
              - generic [ref=e675]: 
              - text: Add to cart
          - generic [ref=e676]:
            - heading "Rs. 5000" [level=2] [ref=e677]
            - paragraph [ref=e678]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e679] [cursor=pointer]:
              - generic [ref=e680]: 
              - text: Add to cart
        - list [ref=e682]:
          - listitem [ref=e683]:
            - link " View Product" [ref=e684] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=e685]: 
              - text: View Product
      - generic [ref=e687]:
        - generic [ref=e688]:
          - generic [ref=e689]:
            - img "ecommerce website products"
            - heading "Rs. 1400" [level=2] [ref=e690]
            - paragraph [ref=e691]: Lace Top For Women
            - generic [ref=e692] [cursor=pointer]:
              - generic [ref=e693]: 
              - text: Add to cart
          - generic [ref=e694]:
            - heading "Rs. 1400" [level=2] [ref=e695]
            - paragraph [ref=e696]: Lace Top For Women
            - generic [ref=e697] [cursor=pointer]:
              - generic [ref=e698]: 
              - text: Add to cart
        - list [ref=e700]:
          - listitem [ref=e701]:
            - link " View Product" [ref=e702] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=e703]: 
              - text: View Product
      - generic [ref=e705]:
        - generic [ref=e706]:
          - generic [ref=e707]:
            - img "ecommerce website products"
            - heading "Rs. 1389" [level=2] [ref=e708]
            - paragraph [ref=e709]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e710] [cursor=pointer]:
              - generic [ref=e711]: 
              - text: Add to cart
          - generic [ref=e712]:
            - heading "Rs. 1389" [level=2] [ref=e713]
            - paragraph [ref=e714]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e715] [cursor=pointer]:
              - generic [ref=e716]: 
              - text: Add to cart
        - list [ref=e718]:
          - listitem [ref=e719]:
            - link " View Product" [ref=e720] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=e721]: 
              - text: View Product
  - insertion [ref=e723]
  - contentinfo [ref=e725]:
    - generic [ref=e730]:
      - heading "Subscription" [level=2] [ref=e731]
      - generic [ref=e732]:
        - textbox "Your email address" [ref=e733]
        - button "" [ref=e734] [cursor=pointer]:
          - generic [ref=e735]: 
        - paragraph [ref=e736]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e740]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { HomePage } from '../Pages/HomePage';
  3   | import { TestConfig } from '../test.config';
  4   | import { ContactUsPage } from '../Pages/ContactUsPage';
  5   | import { TestCasePage } from '../Pages/TestCasePage';
  6   | import { CartPage } from '../Pages/CartPage';
  7   | import { ProductPage } from '../Pages/ProductPage';
  8   | import { CheckoutPage } from '../Pages/CheckoutPage';
  9   | import { RegisterPage } from '../Pages/RegisterPage';
  10  | import { PaymentPage } from '../Pages/PaymentPage';
  11  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  12  | 
  13  | 
  14  | let homePage: HomePage;
  15  | let testConfig: TestConfig;
  16  | let checkoutPage: CheckoutPage;
  17  | let contactUsPage: ContactUsPage;
  18  | let testCasePage: TestCasePage;
  19  | let cartPage: CartPage;
  20  | let productPage: ProductPage;
  21  | let registerPage: RegisterPage;
  22  | let paymentPage: PaymentPage;
  23  | 
  24  |     let name = RandomDataUtil.getFirstName();
  25  |     let email = RandomDataUtil.getEmail();
  26  |     let password = RandomDataUtil.getPassword();
  27  | 
  28  | test.beforeEach(async ({ page }) => {
  29  |     homePage = new HomePage(page);
  30  |     testConfig = new TestConfig();
  31  |     checkoutPage = new CheckoutPage(page);
  32  |     contactUsPage = new ContactUsPage(page);
  33  |     testCasePage = new TestCasePage(page);
  34  |     cartPage = new CartPage(page);
  35  |     registerPage = new RegisterPage(page);
  36  |     productPage = new ProductPage(page);
  37  |     paymentPage = new PaymentPage(page);
> 38  |     await page.goto(testConfig.appUrl);
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  39  |     expect(page.url()).toBe(testConfig.appUrl);
  40  |     console.log("Navigated to home page successfully");
  41  | 
  42  | 
  43  | });
  44  | 
  45  | test('Register While Checkout', async ({ page }) => {
  46  | 
  47  |     await homePage.productsBtn.click();
  48  |     expect(await productPage.isProductPageExists()).toBeTruthy();
  49  |     await productPage.addProductToCart();
  50  |     console.log("Product added to cart successfully");
  51  | 
  52  |     await homePage.cartBtn.click();
  53  |     expect(page.url()).toContain("/view_cart");
  54  |     expect(await cartPage.isCartPageExists()).toBeTruthy();
  55  |     console.log("Navigated to cart page successfully");
  56  | 
  57  |     await cartPage.proceedToCheckoutBtn.click();
  58  |     expect(page.textContent("p:has-text('Register / Login account to proceed on checkout.')")).toBeTruthy();
  59  |     console.log("Warning to register first is shown");
  60  | 
  61  |     await cartPage.continueoncartBtn.click();
  62  |     await homePage.loginOrSignupButton.click();
  63  |     await registerPage.RegisterUser(name, email);
  64  |     expect(page.textContent("h2:has-text('Enter Account Information')")).toBeTruthy();
  65  |     console.log("Enter Account Information is visible");
  66  |     await registerPage.FillAccountInformation(password, RandomDataUtil.getRandomDay(), RandomDataUtil.getRandomMonth(), RandomDataUtil.getRandomYear(), true, true);
  67  |     await registerPage.FillAddressInformation(RandomDataUtil.getFirstName(), RandomDataUtil.getlastName(), RandomDataUtil.getCompanyName(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomCountry(), RandomDataUtil.getRandomState(), RandomDataUtil.getRandomCity(), RandomDataUtil.getZipCode(), RandomDataUtil.getPhoneNumber());
  68  |     await registerPage.SubmitRegistration();
  69  |     expect(page.textContent("h2:has-text('Account Created!')")).toBeTruthy();
  70  |     console.log("Account Created! is visible");
  71  |     console.log("Registered user: " + name + " with email: " + email + " and password: " + password);
  72  |     await registerPage.ContinueAfterRegistration();
  73  |     expect(page.textContent("a:has-text('Logged in as " + name + "')")).toBeTruthy();
  74  |     console.log("Logged in as " + name + " is visible");
  75  | 
  76  |     await homePage.cartBtn.click();
  77  |     expect(page.url()).toContain("/view_cart");
  78  |     expect(await cartPage.isCartPageExists()).toBeTruthy();
  79  |     console.log("Navigated to cart page successfully");
  80  | 
  81  |     await cartPage.proceedToCheckoutBtn.click();
  82  |     expect(await checkoutPage.isCheckoutPageExists()).toBeTruthy();
  83  |     expect(page.textContent("h2:has-text('Address Details')")).toBeTruthy();
  84  |     console.log("Navigated to checkout page successfully");
  85  | 
  86  |         let cartItems = await cartPage.getCartItems();
  87  |     if(cartItems.length > 0){
  88  |         console.log("Cart has items and they are displayed below");
  89  |         for(let i=0;i<cartItems.length;i++){
  90  |             console.log(await cartItems[i].textContent());
  91  |         }
  92  |     }else{
  93  |         console.log("Cart is empty");
  94  |     }
  95  | 
  96  | 
  97  |         let addressInfo = await checkoutPage.getAddressInfo();
  98  |     if(addressInfo.length > 0){
  99  |         console.log("Delivery address information is displayed below");
  100 |         for(let i=0;i<addressInfo.length;i++){
  101 |             console.log(await addressInfo[i].textContent());
  102 |         }
  103 |     }else{
  104 |         console.log("Addreess is empty");
  105 |     }
  106 | 
  107 | 
  108 | 
  109 | 
  110 |         let billingInfo = await checkoutPage.getBillingInfo();
  111 |     if(billingInfo.length > 0){
  112 |         console.log("Billing address information is displayed below");
  113 |         for(let i=0;i<billingInfo.length;i++){
  114 |             console.log(await billingInfo[i].textContent());
  115 |         }
  116 |     }else{
  117 |         console.log("Billing address is empty");
  118 |     }
  119 | 
  120 |     page.waitForTimeout(5000);
  121 | 
  122 | 
  123 |     await checkoutPage.descriptionbox.fill("Please deliver between 9 AM to 5 PM");
  124 |     await checkoutPage.placeorderBtn.click();
  125 |     expect(page.textContent("h2:has-text('Payment')")).toBeTruthy();
  126 |     console.log("Navigated to payment page successfully");
  127 | 
  128 |     
  129 |     await paymentPage.FillPaymentDetails("John Doe", "4111111111111111", "123", "12", "2025");
  130 |     await paymentPage.payAndConfirmOrderBtn.click();
  131 |     expect(page.textContent("h2:has-text('Your order has been placed successfully!')")).toBeTruthy();
  132 |     console.log("Order placed successfully and confirmation message is visible");
  133 | 
  134 |     page.waitForTimeout(5000);
  135 | 
  136 | 
  137 |     await registerPage.DeleteAccount();
  138 |     expect(page.textContent("h2:has-text('Account Deleted!')")).toBeTruthy();
```