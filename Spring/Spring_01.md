# Spring 01

<aside>
💡 스프링은 Web Framework라고 불리운다.
</aside>

JSP를 직접 하나하나 만들기가 너무 버거워서, Spring이라는 프레임워크를 통해 편하고, 생산성 있게 JSP를 다룬다.

Java는 SE, EE가 나눠져 있었다.

- SE - Social Edition

- EE - Enterprise Edition

- SSR (Server Side Render)

- CSR (Client Side Render)

서버는 현대로 와서는 데이터만 주고받는 쪽으로 발전해왔음.

JSON, XML같은 데이터 파라미터들을 이용함.

## Spring boot

- Spring이 편한건 맞는데, JAVA의 고질적인 설정문제가 있다.
- 설정이 복잡하고, 업데이트가 발생할 때 마다, 새로 빌드를 해야하는 불편함이 있었음.
- Java설정과, Spring 설정을 통합으로 관리하자!
- 현재는 Legacy 코드가 아닌 이상, Boot를 많이 사용합니다.

> Spring은 Java라는 언어로 쉽게 웹 페이지 기반 서버를 만들어주는 도구!


# Eclipse에서 Spring boot 프로젝트 생성하기

File - New - Other - Spring Boot - Spring Starter Project 선택

## Type

- 패키지를 관리할 매니지먼트의 언어를 결정
- 두 개의 패키지 매니저가 있음.

### Gradle

- Maven보다는 최신, 조금 더 빠르고 관리하기 편함
- 설정파일의 가독성이 좋음.

### Maven

- 레거시 패키지 매니저로, 근본. 아직까지 사용하는 기업들이 있음.
- 웬만해서는 오래된 기업이 주로 사용한다.

> 두 패키지 매니저 모두, Maven Central Repository를 사용한다.

## Packaging

- 최종 결과물을 서버 매니저를 포함할거냐 말거냐를 해당 단계에서 결정한다.

### JAR

> WAS를 포함하는 패키지

WAS란? Web Application Server로, 웹 서버를 애플리케이션을 돌려서 구동시키는 구조

- Java Archive RAR
- Tomcat, Jetty, jBoss

### WAR

> WAS를 포함하지 않는 패키지
- Tomcat, Jetty같은 외부 WAS를 만들어서 구동해야 함.

## Java version

- LTS 배포판을 기준으로 만들 수 있음.

Long term support를 기준으로 프로젝트를 생성할 수 있음.

## Language

- Java
- Kotlin
- Groovy
- Pascal
- etc…

## JVM - Java Virtual Machine

어떤 컴퓨터, 혹은 장비에서 어떠한 이슈도 없이 동일하게 실행될 수 있어서.

- 원래 프로그래밍 언어들은 컴파일링을 통해 기계가 알아들을 수 있는 Machine코드로 변환한다 (숫자 0과 1로만 되어있는.)
- 인터프리팅 이라는 방식을 채택해서 코드를 실행하는 시점에 읽어서 실행하는 구조가 생김.

### Package

Group.Projectname

위 형식을 지킬 것.

- com.aaange
- Spring-Study
    > com.aaange.spring-study (소문자 필수)
- 그룹 및 패키지 명은 최상위 TLD도메인을 기준으로 한다(약속)

여기까지 오면, 다음 단계로 Dependencies를 선택할 수 있음.

## Dependencies - 의존성

- 여러가지 라이브러리나 패키지 등을 해당 단계에서 편하게 추가하고 갈 수 있음

## Spring boot version

- 3.4.0 (LTS)

### Spring Web

- Spring framework의 가장 코어가 되는 Dependancy
- Web - Spring Web

## Developer tools

- Spring boot devtools
    - 개발 할 때, 자동으로 Reload해주는 라이브러리
    - Hot-Reload기능
- Lombok
    - Java 코드 작성하는 디자인 패턴(약속)이 있는데, 해당 패턴을 어노테이션으로 작성하게 해주는 라이브러리를, Spring에 포함시켜주는 라이브러리
- Spring Configuration Processor
    - 설정 파일을 개발 단계에서 편하게 볼 수 있는 코드

# Project Structure

> Spring boot 프로젝트 생성하면 처음 구성되는 프로젝트 구조


### JRE System Library

- Java Runtime Environment
- 자바를 실행하는데 필요한 최소한의 기본 의존성
- 주로 공식 문서를 읽을때만 사용한다.

### Project and External Dependencies

- 외부 의존성들을 포함하는 부분
- 라이브러리를 모두 모아둔 곳이기 때문에, 외부 의존성 문서는 해당 파트에서 볼 수 있음
- Spring 의존성이 모두 여기에 있음

### bin

- Binary파일이 해당 폴더에 위치해있다.

### gradle

- gradle 패키지 매니저, 설정파일이 해당 위치에 있다.
- Dependancy를 관리하는 패키지 매니저

### src

- 모든 코드 파일, 설정 파일, 패키지가 포함되어있는 폴더.
- 대부분 여기만 건드림.

### src/main

- 모든 프로그래밍 코드가 해당 위치로 감.

### src/test

- 테스트 코드가 해당 위치로 감.
- 런타임 패키지에 포함이 되지 않는다.
- 코드 테스트 프로세스를 다룰 때 써볼 예정


## Spring Main

### Main 코드 위치

- src/main/<PACKAGE_DIR>/<Project명>Application.java

```java
package com.aaange.spring_study;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringStudy01Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringStudy01Application.class, args);
	}

}
```

- Main 안에 있는 run메소드에 실행 Args를 그대로 넘기는 것을 볼 수 있음.

- @SpringBootApplication 어노테이션을 선언 함으로서 해당 Class가 Spring의 의존성을 주입받는다.

## Dependancy Injection

- 의존성 주입
- 원래는 의존성을 Tomcat에게 알려줘야 했음.
    - 어떤 라이브러리를 쓰고, 어떤 설정을 할지 개발 전 단계에서 수동으로 지정을 해줬어야 함.
- Spring boot가 DI 방식을 채용하면서, 실행하는 시점에 라이브러리를 집어넣을 수 있게 변경됨.


# MVC 패턴

- Spring은 MVC패턴을 기반으로 웹 서버를 운영

## Model

- 데이터 제어 레이어

## View

- 노출 제어 레이어

## Controller

- 흐름 제어 레이어

우리는 REST api를 설계할 예정이기 때문(Json, XML)

→ Controller가 요청 Path를 감지 → Path에 정의된 메소드를 통해 어떠한 View를 랜더링 할 지 결정 → 이 과정에서 DATA의 입출력이 필요하면 Model을 사용 → View가 랜더링 한 후, Controller에게 줌 → Controller는 사용자에게 View로 랜더링한 값을 노출

우리는 템플릿(View)을 랜더링 하지 않고, Json을 리턴할 예정이기에, View를 깊게 다루지 않습니다. (실제로 이 단계에서 JSP가 만들어짐)


# REST API

- API - 프로그램끼리 통신하는 인터페이스
- 어떠한 프로그램이라도 서로 통신할 수 있는 ‘규격’

## HTTP Method

### GET

- 주로 데이터를 얻을 때 사용

### POST

- 주로 데이터를 추가/업데이트 할 때 사용

### PUT

- 주로 데이터를 업데이트 하거나 밀어넣을 때 사용

### DELETE

- 주로 데이터를 삭제할 때 사용

### OPTION

- 주로 해당 Path가 어떠한 Method를 지원하는지 확인할 때 사용


## Controller

- Request(요청)를 핸들링 할 때
- 유저의 요청을 path로 분리하고, 어떤 데이터를 받을지, 어떤 형식과 Method로 받을지, 어떤 데이터를 반환할지 정하는 곳.
- 이 이외의 기능은 안하는게 좋다.

## DTO - Data Transfer Object

- 데이터를 다른 레이어로 옮길 때 사용한다.
- Controller → Service
- Service → Controller
- Service → Model
- …

## Service

- 실제로 구분해야 하는 로직
- 예) 유저가 미성년자면 가입 불가능 하게 하는 코드라던지,
    - if( userAge < 20 ) { return false; }
- 혹은 Database에 저장을 한다던지