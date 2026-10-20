import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";
import { Employee } from "./entities/employee.entity";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async getEmployees() {
    try {
      return await this.employeeRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async getEmployeeById(id: string) {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id },
      });
      if (!employee) {
        throw new NotFoundException("Employee with ID not found");
      }
      return employee;
    } catch (error) {
      throw error;
    }
  }

  async createEmployee(dto: CreateEmployeeDto) {
    try {
      const employee = this.employeeRepository.create(dto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  async updateEmployee(id: string, dto: UpdateEmployeeDto) {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id },
      });
      if (!employee) {
        throw new NotFoundException("Employee with ID not found");
      }
      Object.assign(employee, dto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  async deleteEmployee(id: string) {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id },
      });
      if (!employee) {
        throw new NotFoundException("Employee with ID not found");
      }
      await this.employeeRepository.delete({ id });
      return { message: "Employee deleted successfully", id };
    } catch (error) {
      throw error;
    }
  }
}
