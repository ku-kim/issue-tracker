package dev.kukim.learning.testcontainers.mysqlcontainer;


import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;


@Slf4j
@Testcontainers
@DisplayName("@Container + static 으로 테스트 `클래스`마다 하나의 도커 띄우기")
class Basic3MySQLContainer {

	@Container
	static MySQLContainer mySQLContainer = new MySQLContainer("mysql:8");

	@Test
	void test1() {
		log.info("test 1 로그 getJdbcDriverInstance {} ", mySQLContainer.getJdbcDriverInstance());
		log.info("test 1 로그 getJdbcUrl {} ", mySQLContainer.getJdbcUrl());
		log.info("test 1 로그 getMappedPort {} ", mySQLContainer.getMappedPort(3306));
		log.info("test 1 로그 getHost {} ", mySQLContainer.getHost());
		log.info("test 1 로그 getUsername {} ", mySQLContainer.getUsername());
		log.info("test 1 로그 getPassword {} ", mySQLContainer.getPassword());
	}

	@Test
	void test2() {
		log.info("test 2 로그 getJdbcDriverInstance {} ", mySQLContainer.getJdbcDriverInstance());
		log.info("test 2 로그 getJdbcUrl {} ", mySQLContainer.getJdbcUrl());
		log.info("test 2 로그 getMappedPort {} ", mySQLContainer.getMappedPort(3306));
		log.info("test 2 로그 getHost {} ", mySQLContainer.getHost());
		log.info("test 2 로그 getUsername {} ", mySQLContainer.getUsername());
		log.info("test 2 로그 getPassword {} ", mySQLContainer.getPassword());
	}
}
