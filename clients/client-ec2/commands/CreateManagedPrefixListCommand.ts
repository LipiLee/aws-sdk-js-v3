import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateManagedPrefixListRequest, CreateManagedPrefixListResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateManagedPrefixListCommand,
  serializeAws_ec2CreateManagedPrefixListCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateManagedPrefixListCommandInput extends CreateManagedPrefixListRequest {}
export interface CreateManagedPrefixListCommandOutput extends CreateManagedPrefixListResult, __MetadataBearer {}

/**
 * <p>Creates a managed prefix list. You can specify one or more entries for the prefix list. Each entry consists of a CIDR block and an optional description.</p>
 *         <p>You must specify the maximum number of entries for the prefix list. The maximum number of entries cannot be changed later.</p>
 */
export class CreateManagedPrefixListCommand extends $Command<
  CreateManagedPrefixListCommandInput,
  CreateManagedPrefixListCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateManagedPrefixListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateManagedPrefixListCommandInput, CreateManagedPrefixListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateManagedPrefixListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateManagedPrefixListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateManagedPrefixListResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateManagedPrefixListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateManagedPrefixListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateManagedPrefixListCommandOutput> {
    return deserializeAws_ec2CreateManagedPrefixListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
