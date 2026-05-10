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
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e51] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e52]
          - link "APIs list for practice" [ref=e53] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e54]
        - img "demo website for practice" [ref=e56]
    - link "" [ref=e57] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e58]: 
    - link "" [ref=e59] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e60]: 
  - generic [ref=e63]:
    - generic [ref=e65]:
      - heading "Category" [level=2] [ref=e66]
      - generic [ref=e67]:
        - heading " Women" [level=4] [ref=e70]:
          - link " Women" [ref=e71] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e73]: 
            - text: Women
        - heading " Men" [level=4] [ref=e76]:
          - link " Men" [ref=e77] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e79]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e82]:
          - link " Kids" [ref=e83] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e85]: 
            - text: Kids
      - generic [ref=e86]:
        - heading "Brands" [level=2] [ref=e87]
        - list [ref=e89]:
          - listitem [ref=e90]:
            - link "(6) Polo" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e92]: (6)
              - text: Polo
          - listitem [ref=e93]:
            - link "(5) H&M" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e95]: (5)
              - text: H&M
          - listitem [ref=e96]:
            - link "(5) Madame" [ref=e97] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e98]: (5)
              - text: Madame
          - listitem [ref=e99]:
            - link "(3) Mast & Harbour" [ref=e100] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e101]: (3)
              - text: Mast & Harbour
          - listitem [ref=e102]:
            - link "(4) Babyhug" [ref=e103] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e104]: (4)
              - text: Babyhug
          - listitem [ref=e105]:
            - link "(3) Allen Solly Junior" [ref=e106] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e107]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e108]:
            - link "(3) Kookie Kids" [ref=e109] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e110]: (3)
              - text: Kookie Kids
          - listitem [ref=e111]:
            - link "(5) Biba" [ref=e112] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e113]: (5)
              - text: Biba
    - generic [ref=e114]:
      - generic [ref=e115]:
        - heading "Features Items" [level=2] [ref=e116]
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img "ecommerce website products" [ref=e121]
              - heading "Rs. 500" [level=2] [ref=e122]
              - paragraph [ref=e123]: Blue Top
              - generic [ref=e124] [cursor=pointer]:
                - generic [ref=e125]: 
                - text: Add to cart
            - generic [ref=e126]:
              - heading "Rs. 500" [level=2] [ref=e127]
              - paragraph [ref=e128]: Blue Top
              - generic [ref=e129] [cursor=pointer]:
                - generic [ref=e130]: 
                - text: Add to cart
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link " View Product" [ref=e134] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e135]: 
                - text: View Product
        - generic [ref=e137]:
          - generic [ref=e138]:
            - generic [ref=e139]:
              - img "ecommerce website products" [ref=e140]
              - heading "Rs. 400" [level=2] [ref=e141]
              - paragraph [ref=e142]: Men Tshirt
              - generic [ref=e143] [cursor=pointer]:
                - generic [ref=e144]: 
                - text: Add to cart
            - generic [ref=e145]:
              - heading "Rs. 400" [level=2] [ref=e146]
              - paragraph [ref=e147]: Men Tshirt
              - generic [ref=e148] [cursor=pointer]:
                - generic [ref=e149]: 
                - text: Add to cart
          - list [ref=e151]:
            - listitem [ref=e152]:
              - link " View Product" [ref=e153] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e154]: 
                - text: View Product
        - generic [ref=e156]:
          - generic [ref=e157]:
            - generic [ref=e158]:
              - img "ecommerce website products" [ref=e159]
              - heading "Rs. 1000" [level=2] [ref=e160]
              - paragraph [ref=e161]: Sleeveless Dress
              - generic [ref=e162] [cursor=pointer]:
                - generic [ref=e163]: 
                - text: Add to cart
            - generic [ref=e164]:
              - heading "Rs. 1000" [level=2] [ref=e165]
              - paragraph [ref=e166]: Sleeveless Dress
              - generic [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: 
                - text: Add to cart
          - list [ref=e170]:
            - listitem [ref=e171]:
              - link " View Product" [ref=e172] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e173]: 
                - text: View Product
        - generic [ref=e175]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - img "ecommerce website products" [ref=e178]
              - heading "Rs. 1500" [level=2] [ref=e179]
              - paragraph [ref=e180]: Stylish Dress
              - generic [ref=e181] [cursor=pointer]:
                - generic [ref=e182]: 
                - text: Add to cart
            - generic [ref=e183]:
              - heading "Rs. 1500" [level=2] [ref=e184]
              - paragraph [ref=e185]: Stylish Dress
              - generic [ref=e186] [cursor=pointer]:
                - generic [ref=e187]: 
                - text: Add to cart
          - list [ref=e189]:
            - listitem [ref=e190]:
              - link " View Product" [ref=e191] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e192]: 
                - text: View Product
        - generic [ref=e194]:
          - generic [ref=e195]:
            - generic [ref=e196]:
              - img "ecommerce website products" [ref=e197]
              - heading "Rs. 600" [level=2] [ref=e198]
              - paragraph [ref=e199]: Winter Top
              - generic [ref=e200] [cursor=pointer]:
                - generic [ref=e201]: 
                - text: Add to cart
            - generic [ref=e202]:
              - heading "Rs. 600" [level=2] [ref=e203]
              - paragraph [ref=e204]: Winter Top
              - generic [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: 
                - text: Add to cart
          - list [ref=e208]:
            - listitem [ref=e209]:
              - link " View Product" [ref=e210] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e211]: 
                - text: View Product
        - generic [ref=e213]:
          - generic [ref=e214]:
            - generic [ref=e215]:
              - img "ecommerce website products" [ref=e216]
              - heading "Rs. 400" [level=2] [ref=e217]
              - paragraph [ref=e218]: Summer White Top
              - generic [ref=e219] [cursor=pointer]:
                - generic [ref=e220]: 
                - text: Add to cart
            - generic [ref=e221]:
              - heading "Rs. 400" [level=2] [ref=e222]
              - paragraph [ref=e223]: Summer White Top
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e225]: 
                - text: Add to cart
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link " View Product" [ref=e229] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e230]: 
                - text: View Product
        - generic [ref=e232]:
          - generic [ref=e233]:
            - generic [ref=e234]:
              - img "ecommerce website products" [ref=e235]
              - heading "Rs. 1000" [level=2] [ref=e236]
              - paragraph [ref=e237]: Madame Top For Women
              - generic [ref=e238] [cursor=pointer]:
                - generic [ref=e239]: 
                - text: Add to cart
            - generic [ref=e240]:
              - heading "Rs. 1000" [level=2] [ref=e241]
              - paragraph [ref=e242]: Madame Top For Women
              - generic [ref=e243] [cursor=pointer]:
                - generic [ref=e244]: 
                - text: Add to cart
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link " View Product" [ref=e248] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e249]: 
                - text: View Product
        - generic [ref=e251]:
          - generic [ref=e252]:
            - generic [ref=e253]:
              - img "ecommerce website products" [ref=e254]
              - heading "Rs. 700" [level=2] [ref=e255]
              - paragraph [ref=e256]: Fancy Green Top
              - generic [ref=e257] [cursor=pointer]:
                - generic [ref=e258]: 
                - text: Add to cart
            - generic [ref=e259]:
              - heading "Rs. 700" [level=2] [ref=e260]
              - paragraph [ref=e261]: Fancy Green Top
              - generic [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: 
                - text: Add to cart
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link " View Product" [ref=e267] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e268]: 
                - text: View Product
        - generic [ref=e270]:
          - generic [ref=e271]:
            - generic [ref=e272]:
              - img "ecommerce website products" [ref=e273]
              - heading "Rs. 499" [level=2] [ref=e274]
              - paragraph [ref=e275]: Sleeves Printed Top - White
              - generic [ref=e276] [cursor=pointer]:
                - generic [ref=e277]: 
                - text: Add to cart
            - generic [ref=e278]:
              - heading "Rs. 499" [level=2] [ref=e279]
              - paragraph [ref=e280]: Sleeves Printed Top - White
              - generic [ref=e281] [cursor=pointer]:
                - generic [ref=e282]: 
                - text: Add to cart
          - list [ref=e284]:
            - listitem [ref=e285]:
              - link " View Product" [ref=e286] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e287]: 
                - text: View Product
        - generic [ref=e289]:
          - generic [ref=e290]:
            - generic [ref=e291]:
              - img "ecommerce website products" [ref=e292]
              - heading "Rs. 359" [level=2] [ref=e293]
              - paragraph [ref=e294]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e295] [cursor=pointer]:
                - generic [ref=e296]: 
                - text: Add to cart
            - generic [ref=e297]:
              - heading "Rs. 359" [level=2] [ref=e298]
              - paragraph [ref=e299]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e301]: 
                - text: Add to cart
          - list [ref=e303]:
            - listitem [ref=e304]:
              - link " View Product" [ref=e305] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e306]: 
                - text: View Product
        - generic [ref=e308]:
          - generic [ref=e309]:
            - generic [ref=e310]:
              - img "ecommerce website products" [ref=e311]
              - heading "Rs. 278" [level=2] [ref=e312]
              - paragraph [ref=e313]: Frozen Tops For Kids
              - generic [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: 
                - text: Add to cart
            - generic [ref=e316]:
              - heading "Rs. 278" [level=2] [ref=e317]
              - paragraph [ref=e318]: Frozen Tops For Kids
              - generic [ref=e319] [cursor=pointer]:
                - generic [ref=e320]: 
                - text: Add to cart
          - list [ref=e322]:
            - listitem [ref=e323]:
              - link " View Product" [ref=e324] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e325]: 
                - text: View Product
        - generic [ref=e327]:
          - generic [ref=e328]:
            - generic [ref=e329]:
              - img "ecommerce website products" [ref=e330]
              - heading "Rs. 679" [level=2] [ref=e331]
              - paragraph [ref=e332]: Full Sleeves Top Cherry - Pink
              - generic [ref=e333] [cursor=pointer]:
                - generic [ref=e334]: 
                - text: Add to cart
            - generic [ref=e335]:
              - heading "Rs. 679" [level=2] [ref=e336]
              - paragraph [ref=e337]: Full Sleeves Top Cherry - Pink
              - generic [ref=e338] [cursor=pointer]:
                - generic [ref=e339]: 
                - text: Add to cart
          - list [ref=e341]:
            - listitem [ref=e342]:
              - link " View Product" [ref=e343] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e344]: 
                - text: View Product
        - generic [ref=e346]:
          - generic [ref=e347]:
            - generic [ref=e348]:
              - img "ecommerce website products" [ref=e349]
              - heading "Rs. 315" [level=2] [ref=e350]
              - paragraph [ref=e351]: Printed Off Shoulder Top - White
              - generic [ref=e352] [cursor=pointer]:
                - generic [ref=e353]: 
                - text: Add to cart
            - generic [ref=e354]:
              - heading "Rs. 315" [level=2] [ref=e355]
              - paragraph [ref=e356]: Printed Off Shoulder Top - White
              - generic [ref=e357] [cursor=pointer]:
                - generic [ref=e358]: 
                - text: Add to cart
          - list [ref=e360]:
            - listitem [ref=e361]:
              - link " View Product" [ref=e362] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e363]: 
                - text: View Product
        - generic [ref=e365]:
          - generic [ref=e366]:
            - generic [ref=e367]:
              - img "ecommerce website products" [ref=e368]
              - heading "Rs. 478" [level=2] [ref=e369]
              - paragraph [ref=e370]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e371] [cursor=pointer]:
                - generic [ref=e372]: 
                - text: Add to cart
            - generic [ref=e373]:
              - heading "Rs. 478" [level=2] [ref=e374]
              - paragraph [ref=e375]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e376] [cursor=pointer]:
                - generic [ref=e377]: 
                - text: Add to cart
          - list [ref=e379]:
            - listitem [ref=e380]:
              - link " View Product" [ref=e381] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e382]: 
                - text: View Product
        - generic [ref=e384]:
          - generic [ref=e385]:
            - generic [ref=e386]:
              - img "ecommerce website products" [ref=e387]
              - heading "Rs. 1200" [level=2] [ref=e388]
              - paragraph [ref=e389]: Little Girls Mr. Panda Shirt
              - generic [ref=e390] [cursor=pointer]:
                - generic [ref=e391]: 
                - text: Add to cart
            - generic [ref=e392]:
              - heading "Rs. 1200" [level=2] [ref=e393]
              - paragraph [ref=e394]: Little Girls Mr. Panda Shirt
              - generic [ref=e395] [cursor=pointer]:
                - generic [ref=e396]: 
                - text: Add to cart
          - list [ref=e398]:
            - listitem [ref=e399]:
              - link " View Product" [ref=e400] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e401]: 
                - text: View Product
        - generic [ref=e403]:
          - generic [ref=e404]:
            - generic [ref=e405]:
              - img "ecommerce website products" [ref=e406]
              - heading "Rs. 1050" [level=2] [ref=e407]
              - paragraph [ref=e408]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e409] [cursor=pointer]:
                - generic [ref=e410]: 
                - text: Add to cart
            - generic [ref=e411]:
              - heading "Rs. 1050" [level=2] [ref=e412]
              - paragraph [ref=e413]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e414] [cursor=pointer]:
                - generic [ref=e415]: 
                - text: Add to cart
          - list [ref=e417]:
            - listitem [ref=e418]:
              - link " View Product" [ref=e419] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e420]: 
                - text: View Product
        - generic [ref=e422]:
          - generic [ref=e423]:
            - generic [ref=e424]:
              - img "ecommerce website products" [ref=e425]
              - heading "Rs. 1190" [level=2] [ref=e426]
              - paragraph [ref=e427]: Cotton Mull Embroidered Dress
              - generic [ref=e428] [cursor=pointer]:
                - generic [ref=e429]: 
                - text: Add to cart
            - generic [ref=e430]:
              - heading "Rs. 1190" [level=2] [ref=e431]
              - paragraph [ref=e432]: Cotton Mull Embroidered Dress
              - generic [ref=e433] [cursor=pointer]:
                - generic [ref=e434]: 
                - text: Add to cart
          - list [ref=e436]:
            - listitem [ref=e437]:
              - link " View Product" [ref=e438] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e439]: 
                - text: View Product
        - generic [ref=e441]:
          - generic [ref=e442]:
            - generic [ref=e443]:
              - img "ecommerce website products" [ref=e444]
              - heading "Rs. 1530" [level=2] [ref=e445]
              - paragraph [ref=e446]: Blue Cotton Indie Mickey Dress
              - generic [ref=e447] [cursor=pointer]:
                - generic [ref=e448]: 
                - text: Add to cart
            - generic [ref=e449]:
              - heading "Rs. 1530" [level=2] [ref=e450]
              - paragraph [ref=e451]: Blue Cotton Indie Mickey Dress
              - generic [ref=e452] [cursor=pointer]:
                - generic [ref=e453]: 
                - text: Add to cart
          - list [ref=e455]:
            - listitem [ref=e456]:
              - link " View Product" [ref=e457] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e458]: 
                - text: View Product
        - generic [ref=e460]:
          - generic [ref=e461]:
            - generic [ref=e462]:
              - img "ecommerce website products" [ref=e463]
              - heading "Rs. 1600" [level=2] [ref=e464]
              - paragraph [ref=e465]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e466] [cursor=pointer]:
                - generic [ref=e467]: 
                - text: Add to cart
            - generic [ref=e468]:
              - heading "Rs. 1600" [level=2] [ref=e469]
              - paragraph [ref=e470]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e471] [cursor=pointer]:
                - generic [ref=e472]: 
                - text: Add to cart
          - list [ref=e474]:
            - listitem [ref=e475]:
              - link " View Product" [ref=e476] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e477]: 
                - text: View Product
        - generic [ref=e479]:
          - generic [ref=e480]:
            - generic [ref=e481]:
              - img "ecommerce website products" [ref=e482]
              - heading "Rs. 1100" [level=2] [ref=e483]
              - paragraph [ref=e484]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e485] [cursor=pointer]:
                - generic [ref=e486]: 
                - text: Add to cart
            - generic [ref=e487]:
              - heading "Rs. 1100" [level=2] [ref=e488]
              - paragraph [ref=e489]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e490] [cursor=pointer]:
                - generic [ref=e491]: 
                - text: Add to cart
          - list [ref=e493]:
            - listitem [ref=e494]:
              - link " View Product" [ref=e495] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e496]: 
                - text: View Product
        - generic [ref=e498]:
          - generic [ref=e499]:
            - generic [ref=e500]:
              - img "ecommerce website products" [ref=e501]
              - heading "Rs. 849" [level=2] [ref=e502]
              - paragraph [ref=e503]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e504] [cursor=pointer]:
                - generic [ref=e505]: 
                - text: Add to cart
            - generic [ref=e506]:
              - heading "Rs. 849" [level=2] [ref=e507]
              - paragraph [ref=e508]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e509] [cursor=pointer]:
                - generic [ref=e510]: 
                - text: Add to cart
          - list [ref=e512]:
            - listitem [ref=e513]:
              - link " View Product" [ref=e514] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e515]: 
                - text: View Product
        - generic [ref=e517]:
          - generic [ref=e518]:
            - generic [ref=e519]:
              - img "ecommerce website products"
              - heading "Rs. 1299" [level=2] [ref=e520]
              - paragraph [ref=e521]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e522] [cursor=pointer]:
                - generic [ref=e523]: 
                - text: Add to cart
            - generic [ref=e524]:
              - heading "Rs. 1299" [level=2] [ref=e525]
              - paragraph [ref=e526]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e527] [cursor=pointer]:
                - generic [ref=e528]: 
                - text: Add to cart
          - list [ref=e530]:
            - listitem [ref=e531]:
              - link " View Product" [ref=e532] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e533]: 
                - text: View Product
        - generic [ref=e535]:
          - generic [ref=e536]:
            - generic [ref=e537]:
              - img "ecommerce website products"
              - heading "Rs. 1000" [level=2] [ref=e538]
              - paragraph [ref=e539]: Green Side Placket Detail T-Shirt
              - generic [ref=e540] [cursor=pointer]:
                - generic [ref=e541]: 
                - text: Add to cart
            - generic [ref=e542]:
              - heading "Rs. 1000" [level=2] [ref=e543]
              - paragraph [ref=e544]: Green Side Placket Detail T-Shirt
              - generic [ref=e545] [cursor=pointer]:
                - generic [ref=e546]: 
                - text: Add to cart
          - list [ref=e548]:
            - listitem [ref=e549]:
              - link " View Product" [ref=e550] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e551]: 
                - text: View Product
        - generic [ref=e553]:
          - generic [ref=e554]:
            - generic [ref=e555]:
              - img "ecommerce website products"
              - heading "Rs. 1500" [level=2] [ref=e556]
              - paragraph [ref=e557]: Premium Polo T-Shirts
              - generic [ref=e558] [cursor=pointer]:
                - generic [ref=e559]: 
                - text: Add to cart
            - generic [ref=e560]:
              - heading "Rs. 1500" [level=2] [ref=e561]
              - paragraph [ref=e562]: Premium Polo T-Shirts
              - generic [ref=e563] [cursor=pointer]:
                - generic [ref=e564]: 
                - text: Add to cart
          - list [ref=e566]:
            - listitem [ref=e567]:
              - link " View Product" [ref=e568] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e569]: 
                - text: View Product
        - generic [ref=e571]:
          - generic [ref=e572]:
            - generic [ref=e573]:
              - img "ecommerce website products"
              - heading "Rs. 850" [level=2] [ref=e574]
              - paragraph [ref=e575]: Pure Cotton Neon Green Tshirt
              - generic [ref=e576] [cursor=pointer]:
                - generic [ref=e577]: 
                - text: Add to cart
            - generic [ref=e578]:
              - heading "Rs. 850" [level=2] [ref=e579]
              - paragraph [ref=e580]: Pure Cotton Neon Green Tshirt
              - generic [ref=e581] [cursor=pointer]:
                - generic [ref=e582]: 
                - text: Add to cart
          - list [ref=e584]:
            - listitem [ref=e585]:
              - link " View Product" [ref=e586] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e587]: 
                - text: View Product
        - generic [ref=e589]:
          - generic [ref=e590]:
            - generic [ref=e591]:
              - img "ecommerce website products"
              - heading "Rs. 799" [level=2] [ref=e592]
              - paragraph [ref=e593]: Soft Stretch Jeans
              - generic [ref=e594] [cursor=pointer]:
                - generic [ref=e595]: 
                - text: Add to cart
            - generic [ref=e596]:
              - heading "Rs. 799" [level=2] [ref=e597]
              - paragraph [ref=e598]: Soft Stretch Jeans
              - generic [ref=e599] [cursor=pointer]:
                - generic [ref=e600]: 
                - text: Add to cart
          - list [ref=e602]:
            - listitem [ref=e603]:
              - link " View Product" [ref=e604] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e605]: 
                - text: View Product
        - generic [ref=e607]:
          - generic [ref=e608]:
            - generic [ref=e609]:
              - img "ecommerce website products"
              - heading "Rs. 1200" [level=2] [ref=e610]
              - paragraph [ref=e611]: Regular Fit Straight Jeans
              - generic [ref=e612] [cursor=pointer]:
                - generic [ref=e613]: 
                - text: Add to cart
            - generic [ref=e614]:
              - heading "Rs. 1200" [level=2] [ref=e615]
              - paragraph [ref=e616]: Regular Fit Straight Jeans
              - generic [ref=e617] [cursor=pointer]:
                - generic [ref=e618]: 
                - text: Add to cart
          - list [ref=e620]:
            - listitem [ref=e621]:
              - link " View Product" [ref=e622] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e623]: 
                - text: View Product
        - generic [ref=e625]:
          - generic [ref=e626]:
            - generic [ref=e627]:
              - img "ecommerce website products"
              - heading "Rs. 1400" [level=2] [ref=e628]
              - paragraph [ref=e629]: Grunt Blue Slim Fit Jeans
              - generic [ref=e630] [cursor=pointer]:
                - generic [ref=e631]: 
                - text: Add to cart
            - generic [ref=e632]:
              - heading "Rs. 1400" [level=2] [ref=e633]
              - paragraph [ref=e634]: Grunt Blue Slim Fit Jeans
              - generic [ref=e635] [cursor=pointer]:
                - generic [ref=e636]: 
                - text: Add to cart
          - list [ref=e638]:
            - listitem [ref=e639]:
              - link " View Product" [ref=e640] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e641]: 
                - text: View Product
        - generic [ref=e643]:
          - generic [ref=e644]:
            - generic [ref=e645]:
              - img "ecommerce website products"
              - heading "Rs. 2300" [level=2] [ref=e646]
              - paragraph [ref=e647]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e648] [cursor=pointer]:
                - generic [ref=e649]: 
                - text: Add to cart
            - generic [ref=e650]:
              - heading "Rs. 2300" [level=2] [ref=e651]
              - paragraph [ref=e652]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e653] [cursor=pointer]:
                - generic [ref=e654]: 
                - text: Add to cart
          - list [ref=e656]:
            - listitem [ref=e657]:
              - link " View Product" [ref=e658] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e659]: 
                - text: View Product
        - generic [ref=e661]:
          - generic [ref=e662]:
            - generic [ref=e663]:
              - img "ecommerce website products"
              - heading "Rs. 3000" [level=2] [ref=e664]
              - paragraph [ref=e665]: Cotton Silk Hand Block Print Saree
              - generic [ref=e666] [cursor=pointer]:
                - generic [ref=e667]: 
                - text: Add to cart
            - generic [ref=e668]:
              - heading "Rs. 3000" [level=2] [ref=e669]
              - paragraph [ref=e670]: Cotton Silk Hand Block Print Saree
              - generic [ref=e671] [cursor=pointer]:
                - generic [ref=e672]: 
                - text: Add to cart
          - list [ref=e674]:
            - listitem [ref=e675]:
              - link " View Product" [ref=e676] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e677]: 
                - text: View Product
        - generic [ref=e679]:
          - generic [ref=e680]:
            - generic [ref=e681]:
              - img "ecommerce website products"
              - heading "Rs. 3500" [level=2] [ref=e682]
              - paragraph [ref=e683]: Rust Red Linen Saree
              - generic [ref=e684] [cursor=pointer]:
                - generic [ref=e685]: 
                - text: Add to cart
            - generic [ref=e686]:
              - heading "Rs. 3500" [level=2] [ref=e687]
              - paragraph [ref=e688]: Rust Red Linen Saree
              - generic [ref=e689] [cursor=pointer]:
                - generic [ref=e690]: 
                - text: Add to cart
          - list [ref=e692]:
            - listitem [ref=e693]:
              - link " View Product" [ref=e694] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e695]: 
                - text: View Product
        - generic [ref=e697]:
          - generic [ref=e698]:
            - generic [ref=e699]:
              - img "ecommerce website products"
              - heading "Rs. 5000" [level=2] [ref=e700]
              - paragraph [ref=e701]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e702] [cursor=pointer]:
                - generic [ref=e703]: 
                - text: Add to cart
            - generic [ref=e704]:
              - heading "Rs. 5000" [level=2] [ref=e705]
              - paragraph [ref=e706]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e707] [cursor=pointer]:
                - generic [ref=e708]: 
                - text: Add to cart
          - list [ref=e710]:
            - listitem [ref=e711]:
              - link " View Product" [ref=e712] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e713]: 
                - text: View Product
        - generic [ref=e715]:
          - generic [ref=e716]:
            - generic [ref=e717]:
              - img "ecommerce website products"
              - heading "Rs. 1400" [level=2] [ref=e718]
              - paragraph [ref=e719]: Lace Top For Women
              - generic [ref=e720] [cursor=pointer]:
                - generic [ref=e721]: 
                - text: Add to cart
            - generic [ref=e722]:
              - heading "Rs. 1400" [level=2] [ref=e723]
              - paragraph [ref=e724]: Lace Top For Women
              - generic [ref=e725] [cursor=pointer]:
                - generic [ref=e726]: 
                - text: Add to cart
          - list [ref=e728]:
            - listitem [ref=e729]:
              - link " View Product" [ref=e730] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e731]: 
                - text: View Product
        - generic [ref=e733]:
          - generic [ref=e734]:
            - generic [ref=e735]:
              - img "ecommerce website products"
              - heading "Rs. 1389" [level=2] [ref=e736]
              - paragraph [ref=e737]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e738] [cursor=pointer]:
                - generic [ref=e739]: 
                - text: Add to cart
            - generic [ref=e740]:
              - heading "Rs. 1389" [level=2] [ref=e741]
              - paragraph [ref=e742]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e743] [cursor=pointer]:
                - generic [ref=e744]: 
                - text: Add to cart
          - list [ref=e746]:
            - listitem [ref=e747]:
              - link " View Product" [ref=e748] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e749]: 
                - text: View Product
      - generic [ref=e750]:
        - heading "recommended items" [level=2] [ref=e751]
        - generic [ref=e752]:
          - generic [ref=e753]:
            - text:   
            - generic:
              - generic [ref=e757]:
                - img "ecommerce website products" [ref=e758]
                - heading "Rs. 1500" [level=2] [ref=e759]
                - paragraph [ref=e760]: Stylish Dress
                - generic [ref=e761] [cursor=pointer]:
                  - generic [ref=e762]: 
                  - text: Add to cart
              - generic [ref=e766]:
                - img "ecommerce website products" [ref=e767]
                - heading "Rs. 600" [level=2] [ref=e768]
                - paragraph [ref=e769]: Winter Top
                - generic [ref=e770] [cursor=pointer]:
                  - generic [ref=e771]: 
                  - text: Add to cart
              - generic [ref=e775]:
                - img "ecommerce website products" [ref=e776]
                - heading "Rs. 400" [level=2] [ref=e777]
                - paragraph [ref=e778]: Summer White Top
                - generic [ref=e779] [cursor=pointer]:
                  - generic [ref=e780]: 
                  - text: Add to cart
          - link "" [ref=e781] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e782]: 
          - link "" [ref=e783] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e784]: 
  - contentinfo [ref=e785]:
    - generic [ref=e790]:
      - heading "Subscription" [level=2] [ref=e791]
      - generic [ref=e792]:
        - textbox "Your email address" [ref=e793]
        - button "" [ref=e794] [cursor=pointer]:
          - generic [ref=e795]: 
        - paragraph [ref=e796]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e800]: Copyright © 2021 All rights reserved
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