// package com.projet.demo.configuration;

// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


// @EnableWebSecurity
// public class Security extends WebSecurityConfigurerAdapter {
//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http.authorizeRequests()
//                 .antMatchers("/h2-console/**").permitAll()
//                 .antMatchers("/**").authenticated()
//                 .and()
//                 .formLogin();

//         http.csrf().disable();
//         http.headers().frameOptions().disable();
//     }
// }
