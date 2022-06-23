package dev.kukim.learning.testcontainers.mysqlcontainer;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;


@Slf4j
@Testcontainers
@DisplayName("@Container 어노테이션 사용으로, start(), stop()없이 매 테스트마다 도커 띄우기")
class Basic2MySQLContainer {

	@Container
	MySQLContainer mySQLContainer = new MySQLContainer("mysql:8");

	@Test
	void test1() {
		log.info("로그 getJdbcDriverInstance {} ", mySQLContainer.getJdbcDriverInstance());
		log.info("로그 getJdbcUrl {} ", mySQLContainer.getJdbcUrl());
		log.info("로그 getMappedPort {} ", mySQLContainer.getMappedPort(3306));
		log.info("로그 getHost {} ", mySQLContainer.getHost());
		log.info("로그 getUsername {} ", mySQLContainer.getUsername());
		log.info("로그 getPassword {} ", mySQLContainer.getPassword());

		try {
			Connection conn = DriverManager.getConnection(mySQLContainer.getJdbcUrl(),
				mySQLContainer.getUsername(),
				mySQLContainer.getPassword());
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Test
	void test2() {
		log.info("로그 getJdbcDriverInstance {} ", mySQLContainer.getJdbcDriverInstance());
		log.info("로그 getJdbcUrl {} ", mySQLContainer.getJdbcUrl());
		log.info("로그 getMappedPort {} ", mySQLContainer.getMappedPort(3306));
		log.info("로그 getHost {} ", mySQLContainer.getHost());
		log.info("로그 getUsername {} ", mySQLContainer.getUsername());
		log.info("로그 getPassword {} ", mySQLContainer.getPassword());
	}
}
