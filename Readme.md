this is a very basic serverless application. 
It will deploy API Gateway with your lambda function behind. 


# How to 

- you need to set your aws credentials. 

```
aws configure
```

- install serverless 

```
npm install serverless -g 
```

- install grunt 

```
npm install grunt -g 
```

- install dependencies

```
npm install
```

- deploy to AWS with grunt

```
grunt
```

- run mocha tests 

```
grunt test
```

- run your lambda 

```
serverless invoke hello
```
